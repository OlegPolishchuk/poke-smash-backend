import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { $Enums } from '@prisma/generated/prisma';

import { PaginatedListDto, PaginationDto } from '@/src/api/pokemon/dto/paginate.dto';
import { PokemonWithStats } from '@/src/api/pokemon/dto/pokemon';
import { pokemonApi } from '@/src/api/pokemon/pokemon.api';
import { PrismaService } from '@/src/core/prisma/prisma.service';

import SwipeType = $Enums.SwipeType;

interface SwipeDto {
  user_id: string;
  pokemon_id: number;
}

@Injectable()
export class PokemonService {
  constructor(
    private prismaService: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {}

  async getExistingSwipe({ user_id, pokemon_id }: SwipeDto) {
    return this.prismaService.swipes.findUnique({
      where: {
        user_id_pokemon_id: {
          user_id: user_id,
          pokemon_id: pokemon_id,
        },
      },
    });
  }

  async like({ user_id, pokemon_id }: SwipeDto) {
    const existingSwipe = await this.getExistingSwipe({ user_id, pokemon_id });

    if (existingSwipe?.id) {
      if (existingSwipe.type === 'DISLIKE') {
        // Был дизлайк — обновляем на лайк
        await this.prismaService.$transaction([
          this.prismaService.swipes.update({
            where: { id: existingSwipe.id },
            data: { type: SwipeType.LIKE },
          }),

          this.prismaService.pokemonStats.upsert({
            where: { pokemon_id },
            update: {
              likes: { increment: 1 },
              // disliked: { decrement: 1 },
            },
            create: {
              pokemon_id,
              likes: 1,
              disliked: 0,
            },
          }),
          this.prismaService.user.update({
            where: { id: user_id },
            data: {
              likes: { increment: 1 },
            },
          }),
        ]);
      } else {
        // Если уже LIKE — обновляем количесво лайков в статистике покемона
        await this.prismaService.pokemonStats.upsert({
          where: { pokemon_id },
          update: {
            likes: { increment: 1 },
            // disliked: { decrement: 1 },
          },
          create: {
            pokemon_id,
            likes: 1,
            disliked: 0,
          },
        });
      }
    } else {
      // Новый лайк
      await this.prismaService.$transaction([
        this.prismaService.swipes.create({
          data: {
            user_id,
            pokemon_id,
            type: SwipeType.LIKE,
          },
        }),
        this.prismaService.pokemonStats.upsert({
          where: { pokemon_id },
          update: {
            likes: { increment: 1 },
          },
          create: {
            pokemon_id,
            likes: 1,
            disliked: 0,
          },
        }),
        this.prismaService.user.update({
          where: { id: user_id },
          data: {
            likes: { increment: 1 },
          },
        }),
      ]);
    }

    await this.updateStats(pokemon_id);

    const user = await this.prismaService.user.findUnique({
      where: { id: user_id },
      select: {
        likes: true,
        dislikes: true,
        updated_at: true,
        created_at: false,
        id: true,
        avatar: false,
        email: false,
        username: false,
        password: false,
      },
    });

    return user;
  }

  async dislike({ user_id, pokemon_id }: SwipeDto) {
    const existingSwipe = await this.getExistingSwipe({ user_id, pokemon_id });

    if (existingSwipe) {
      if (existingSwipe.type === SwipeType.LIKE) {
        // Был лайк — удаляем запись
        await this.prismaService.$transaction([
          this.prismaService.swipes.delete({
            where: { id: existingSwipe.id },
          }),
          this.prismaService.pokemonStats.upsert({
            where: { pokemon_id: pokemon_id },
            update: {
              likes: { decrement: 1 },
            },
            create: {
              pokemon_id: pokemon_id,
              likes: 0,
              disliked: 1,
            },
          }),
          this.prismaService.user.update({
            where: { id: user_id },
            data: {
              dislikes: { increment: 1 },
            },
          }),
        ]);
      }
      // Уже дизлайк — ничего не делаем
      else {
        // Если уже LIKE — обновляем количесво лайков в статистике покемона
        await this.prismaService.pokemonStats.upsert({
          where: { pokemon_id },
          update: {
            // likes: { increment: 1 },
            disliked: { increment: 1 },
          },
          create: {
            pokemon_id,
            likes: 1,
            disliked: 0,
          },
        });
      }
    } else {
      // Новый дизлайк
      await this.prismaService.$transaction([
        this.prismaService.swipes.create({
          data: {
            user_id: user_id,
            pokemon_id: pokemon_id,
            type: SwipeType.DISLIKE,
          },
        }),
        this.prismaService.pokemonStats.upsert({
          where: { pokemon_id: pokemon_id },
          update: {
            disliked: { increment: 1 },
          },
          create: {
            pokemon_id: pokemon_id,
            likes: 0,
            disliked: 1,
          },
        }),
        this.prismaService.user.update({
          where: { id: user_id },
          data: {
            dislikes: { increment: 1 },
          },
        }),
      ]);
    }

    await this.updateStats(pokemon_id);

    return await this.prismaService.user.findUnique({
      where: { id: user_id },
      select: {
        likes: true,
        dislikes: true,
        updated_at: true,
        created_at: false,
        id: true,
        avatar: false,
        email: false,
        username: false,
        password: false,
      },
    });
  }

  async getPokemon(id: number | string = 1) {
    try {
      const pokemonRes = await pokemonApi.getPokemon(id);

      return pokemonRes.data;
    } catch {
      throw new NotFoundException();
    }
  }

  async getPokemonSpecies(id: number) {
    try {
      const pokemonSpicesRes = await pokemonApi.getSpecies(id);

      return pokemonSpicesRes.data;
    } catch {
      throw new NotFoundException();
    }
  }

  async getPokemonSwipeStatistic(pokemon_id: number) {
    try {
      const pokemonStats = await this.prismaService.pokemonStats.findUnique({
        where: { pokemon_id },
      });

      if (!pokemonStats) {
        return await this.prismaService.pokemonStats.create({
          data: { pokemon_id: pokemon_id },
          select: {
            pokemon_id: true,
            disliked: true,
            id: true,
            created_at: true,
            updated_at: true,
            likes: true,
          },
        });
      }

      return pokemonStats;
    } catch {
      throw new NotFoundException();
    }
  }

  async updateStats(pokemonId: number) {
    const stats = await this.prismaService.pokemonStats.findUnique({
      where: { pokemon_id: pokemonId },
    });

    if (stats) {
      this.eventEmitter.emit('statistic.updated', stats);
    }
  }

  async getPokemonAbility(id: number | string) {
    try {
      const ability = await pokemonApi.getAbility(id);

      return ability.data;
    } catch (e) {
      console.log('error in "getPokemonAbility"', e);
      throw new NotFoundException();
    }
  }

  async getPokemonWeaknesses(id: number | string) {
    try {
      const typeRes = await pokemonApi.getType(id);

      const damage = typeRes.data.damage_relations;
      return damage.double_damage_from.map((data) => data.name);
    } catch (e) {
      console.log('error in "getPokemonAbility"', e);
      throw new NotFoundException();
    }
  }

  async getPokemonEvolutions(id: number | string) {
    try {
      const evolutions = await pokemonApi.getEvolutions(id);

      return evolutions.data;
    } catch (e) {
      console.log('error in "getPokemonEvolutions"', e);
      throw new NotFoundException();
    }
  }

  async getPokemonList(params: PaginationDto): Promise<PaginatedListDto<PokemonWithStats>> {
    try {
      const { data } = await pokemonApi.getPokemonList(params);
      const names = data.results.map((poke) => poke.name);

      const settledPokemonResponses = await Promise.allSettled(
        names.map((name) => pokemonApi.getPokemon(name)),
      );

      const pokemons = settledPokemonResponses.flatMap((res) =>
        res.status === 'fulfilled' ? [res.value.data] : [],
      );

      const swipeStatsList = await Promise.all(
        pokemons.map((pok) => this.getPokemonSwipeStatistic(pok.id)),
      );

      const results: PokemonWithStats[] = pokemons.map((pokemon, index) => ({
        ...pokemon,
        likes: swipeStatsList[index].likes,
        dislikes: swipeStatsList[index].disliked,
      }));

      return {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results,
      };
    } catch (error) {
      console.error('Error in "getPokemonList":', error);
      throw new NotFoundException();
    }
  }

  async getTopTen() {
    try {
      const pokemonsStats = await this.prismaService.pokemonStats.findMany({
        orderBy: { likes: 'desc' },
        take: 10,
      });

      const pokemons = await Promise.all(
        pokemonsStats.map((pokemon) => this.getPokemon(pokemon.pokemon_id)),
      );

      return pokemons.map((pokemon, index) => ({
        ...pokemon,
        likes: pokemonsStats[index].likes,
        dislikes: pokemonsStats[index].disliked,
      }));
    } catch (error) {
      console.log('Error in "getTopTen" :', error);
      throw new NotFoundException();
    }
  }
}
