import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { PrismaModule } from '@/src/core/prisma/prisma.module';
import { RedisModule } from '@/src/core/redis/redis.module';
import { AuthModule } from '@/src/modules/auth/auth.module';
import { PokemonModule } from '@/src/modules/pokemon/pokemon.module';
import { StatisticsModule } from '@/src/modules/statistics/statistics.module';
import { UserModule } from '@/src/modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    EventEmitterModule.forRoot(),
    RedisModule,
    PrismaModule,
    UserModule,
    AuthModule,
    PokemonModule,
    StatisticsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
