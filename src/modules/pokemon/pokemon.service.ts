import { Injectable, NotFoundException } from '@nestjs/common';
import { $Enums } from '@prisma/generated/prisma';

import { pokemonApi } from '@/src/api/pokemon/pokemon.api';
import { PrismaService } from '@/src/core/prisma/prisma.service';

import SwipeType = $Enums.SwipeType;

interface SwipeDto {
  user_id: string;
  pokemon_id: number;
}

@Injectable()
export class PokemonService {
  constructor(private prismaService: PrismaService) {}

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

  async getPokemon(id: number = 1) {
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
      return await this.prismaService.pokemonStats.findUnique({
        where: { pokemon_id },
      });
    } catch {
      throw new NotFoundException();
    }
  }
}
