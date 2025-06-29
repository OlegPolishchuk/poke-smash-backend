import { Module } from '@nestjs/common';

// Проверьте путь! Возможно, нужен другой.
import { PrismaModule } from '@/src/core/prisma/prisma.module';
import { UserModule } from '@/src/modules/user/user.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule, PrismaModule], // UserModule импортирован
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
