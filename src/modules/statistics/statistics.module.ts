import { Module } from '@nestjs/common';

import { PokemonGateway } from '@/src/modules/statistics/polemon.gateway';

import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService, PokemonGateway],
  exports: [StatisticsService],
})
export class StatisticsModule {}
