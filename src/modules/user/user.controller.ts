import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Put,
} from '@nestjs/common';

import { UserDto } from '@/src/modules/user/dto/user.dto';
import { UserService } from '@/src/modules/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put()
  @HttpCode(200)
  async updateUser(@Body() userDto: UserDto) {
    try {
      const updatedUser = await this.userService.updateUser(userDto);

      if (!updatedUser) {
        return new NotFoundException();
      }

      return updatedUser;
    } catch (error) {
      // Логируем ошибку для отладки (опционально)
      console.error(error);

      // Определяем статус ошибки
      const status =
        error instanceof NotFoundException
          ? HttpStatus.NOT_FOUND
          : HttpStatus.INTERNAL_SERVER_ERROR;

      // Бросаем HttpException с соответствующим статусом и сообщением
      throw new HttpException(
        {
          statusCode: status,
          message: error.message || 'Произошла ошибка при обновлении пользователя',
        },
        status,
      );
    }
  }
}
