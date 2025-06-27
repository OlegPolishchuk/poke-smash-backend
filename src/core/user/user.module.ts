import { Module } from '@nestjs/common';

import { PrismaModule } from '@/src/core/prisma/prisma.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Экспорт сервиса
})
export class UserModule {}
