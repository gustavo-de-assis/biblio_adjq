import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Book[] | null> {
    return await this.prisma.book.findMany({
      include: {
        author: true,
        loans: true,
      },
    });
  }

  async findOne(id: string): Promise<Book | null> {
    return await this.prisma.book.findFirst({
      where: { id },
      include: {
        author: true,
        loans: true,
      },
    });
  }

  async create(bookDto: CreateBookDto) {
    const { authorId, author, ...bookData } = bookDto;

    return await this.prisma.$transaction(async (tx) => {
      let finalAuthorId = authorId;
      if (!finalAuthorId && author) {
        const newAuthor = await tx.author.create({
          data: {
            name: author.name,
            bio: author.bio,
          },
        });
        finalAuthorId = newAuthor.id;
      }
      const newBook = await tx.book.create({
        data: {
          ...bookData,
          authorId: finalAuthorId,
          onLoan: 0,
          totalLoans: 0,
        },
      });

      return {
        status: HttpStatus.CREATED,
        message: 'Livro inserido na base de dados',
        data: newBook,
      };
    });
  }

  async update(bookId: string, updateBook: UpdateBookDto) {
    const book = await this.findOne(bookId);
    if (!book) {
      throw new HttpException(
        'Falha ao atualizar livro! Livro não encontrado na base de dados',
        HttpStatus.NOT_FOUND,
      );
    }
    try {
      await this.prisma.book.update({
        where: { id: bookId },
        data: {
          ...updateBook,
        },
      });
      return { status: 200, message: 'Livro atualizado na base de dados!' };
    } catch (error) {
      throw new HttpException(
        'Houve um problema ao atualizar o livro na base de dados!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
