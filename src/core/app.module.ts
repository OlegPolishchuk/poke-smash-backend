import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '@/src/core/auth/auth.module';
import { PrismaModule } from '@/src/core/prisma/prisma.module';
import { RedisModule } from '@/src/core/redis/redis.module';
import { UserModule } from '@/src/core/user/user.module';

import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RedisModule,
    PrismaModule,
    UserModule,
    AuthModule,
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
