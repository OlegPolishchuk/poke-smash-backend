import { Controller, Get, HttpCode, Post, Res, Session } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from '@/src/core/auth/auth.service';
import { AppSession } from '@/src/core/auth/types';
import { UserDto } from '@/src/core/user/dto/user.dto';
import { UserService } from '@/src/core/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get('/me')
  async me(@Session() session: AppSession, @Res({ passthrough: true }) response: Response) {
    console.log('session =>', session);

    let user: UserDto | null;

    if (session.user_id) {
      user = await this.userService.findUser(session.user_id);

      if (!user) {
        user = await this.createNewUser(session);
      }
    } else {
      // Создаем нового пользователя если нет в сессии
      user = await this.createNewUser(session);
    }

    // Логика для куки
    response.cookie('poke_sid', user.id, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
    });

    return user;
  }

  private async createNewUser(session: Record<string, any>): Promise<UserDto> {
    // Создаем нового пользователя
    const newUser = await this.userService.createNewUser();

    // Сохраняем ID в сессию
    session.user_id = newUser.id;
    console.log(`Created new user with ID: ${newUser.id}`);

    return newUser;
  }

  @Post('/logout')
  @HttpCode(204)
  async logout(@Session() session: AppSession, @Res() response: Response) {
    const user = await this.createNewUser(session);

    session.user_id = `${user.id}`;

    response.cookie('poke_sid', user.id, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 дней
    });

    response.status(204).send();
  }
}
