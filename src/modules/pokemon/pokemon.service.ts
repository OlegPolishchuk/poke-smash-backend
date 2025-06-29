import { Injectable } from '@nestjs/common';
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

    if (existingSwipe) {
      if (existingSwipe.type === 'DISLIKE') {
        // Был дизлайк — обновляем на лайк
        await this.prismaService.$transaction([
          this.prismaService.swipes.update({
            where: { id: existingSwipe.id },
            data: { type: SwipeType.LIKE },
          }),
          this.prismaService.pokemonStats.upsert({
            where: { pokemon_id: pokemon_id },
            update: {
              likes: { increment: 1 },
              disliked: { decrement: 1 },
            },
            create: {
              pokemon_id: pokemon_id,
              likes: 1,
              disliked: 0,
            },
          }),
        ]);
      }
      // Если уже LIKE — ничего не делаем или обновляем timestamp
    } else {
      // Новый лайк
      await this.prismaService.$transaction([
        this.prismaService.swipes.create({
          data: {
            user_id: user_id,
            pokemon_id: pokemon_id,
            type: SwipeType.LIKE,
          },
        }),
        this.prismaService.pokemonStats.upsert({
          where: { pokemon_id: pokemon_id },
          update: {
            likes: { increment: 1 },
          },
          create: {
            pokemon_id: pokemon_id,
            likes: 1,
            disliked: 0,
          },
        }),
      ]);
    }
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
        ]);
      }
      // Уже дизлайк — ничего не делаем
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
      ]);
    }
  }

  async getPokemon(id: number = 1) {
    const pokemonRes = await pokemonApi.getPokemon(id);

    return pokemonRes.data;
  }
}
