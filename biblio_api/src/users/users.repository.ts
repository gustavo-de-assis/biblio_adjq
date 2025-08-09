import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[] | null> {
    return await this.prisma.user.findMany({
      include: {
        address: true,
        loans: true,
      },
    });
  }

  async findOne(id: string): Promise<User | null> {
    return await this.prisma.user.findFirst({
      where: { id },
      include: {
        address: true,
        loans: true,
      },
    });
  }

  async create(userDto: CreateUserDto) {
    try {
      await this.prisma.user.create({
        data: {
          name: userDto.name,
          email: userDto.email,
          phone: userDto.phone,
          address: {
            create: {
              street: userDto.address.street,
              number: userDto.address.number,
              city: userDto.address.city,
              state: userDto.address.state,
            },
          },
        },
      });

      return { status: 201, message: 'Usuário inserido na base de dados!' };
    } catch (error) {
      throw new HttpException(
        'Houve um problema ao inserir o usuário na base de dados!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(userId: string, updateUser: UpdateUserDto) {
    try {
      await this.prisma.user.update({
        where: { id: userId },
        data: {
          ...updateUser,
        },
      });
      return { status: 200, message: 'Usuário atualizado na base de dados!' };
    } catch (error) {
      throw new HttpException(
        'Houve um problema ao atualizar o usuário na base de dados!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
