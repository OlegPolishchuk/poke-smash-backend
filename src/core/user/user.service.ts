import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import { PrismaService } from '@/src/core/prisma/prisma.service';
import { UserDto } from '@/src/core/user/dto/user.dto';

@Injectable()
export class UserService {
  _userFields = {
    id: true,
    email: true,
    username: true,
    avatar: true,
    created_at: true,
    updated_at: true,
    password: false,
  };

  constructor(private prisma: PrismaService) {}

  async findUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: this._userFields,
    });

    return user;
  }

  async createNewUser(user?: UserDto) {
    const saltOrRounds = 10;
    const password = uuid();
    const hash = await bcrypt.hash(password, saltOrRounds);

    const newUser = await this.prisma.user.create({
      data: {
        ...user,
        password: hash,
        username: user?.username ?? '',
      },
      select: this._userFields,
    });

    return newUser;
  }

  async updateUser(user: UserDto) {
    const updatedUser = await this.prisma.user.update({
      where: { id: user.id },
      data: user,
      select: this._userFields,
    });

    return updatedUser;
  }
}
