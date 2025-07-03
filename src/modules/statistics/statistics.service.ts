import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/src/core/prisma/prisma.service';

@Injectable()
export class StatisticsService {
  constructor(private prismaService: PrismaService) {}

  async getStatisticByPokemonId(pokemonId: number) {
    return this.prismaService.pokemonStats.findUniqueOrThrow({
      where: { pokemon_id: pokemonId },
    });
  }

  async getMaxActionsCount() {
    try {
      const maxStats = await this.prismaService.pokemonStats.aggregate({
        _max: {
          likes: true,
          disliked: true,
        },
      });

      const { _max } = maxStats;
      const likes = _max.likes ?? 0;
      const disliked = _max.disliked ?? 0;

      return likes > disliked ? likes : disliked;
    } catch {
      throw new Error('Unable to get max action count');
    }
  }
}
