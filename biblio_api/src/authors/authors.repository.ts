import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Author } from '@prisma/client';

@Injectable()
export class AuthorsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Author[] | null> {
    return await this.prisma.author.findMany();
  }

  async findOne(id: string): Promise<Author | null> {
    return await this.prisma.author.findFirst({
      where: { id },
    });
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<void> {
    try {
      await this.prisma.author.update({
        where: { id },
        data: updateAuthorDto,
      });
    } catch (error) {
      throw new HttpException(
        'Falha ao atualizar dados do autor.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
