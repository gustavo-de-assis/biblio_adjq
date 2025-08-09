import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksRepository } from './books.repository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BooksRepository) {}

  async create(createBookDto: CreateBookDto) {
    return await this.bookRepository.create(createBookDto);
  }

  async findAll() {
    return await this.bookRepository.findAll();
  }

  async findOne(id: string) {
    return await this.bookRepository.findOne(id);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return await this.bookRepository.update(id, updateBookDto);
  }

  remove(id: string) {
    return `This action removes a #${id} book`;
  }
}
