import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorsRepository } from './authors.repository';

@Injectable()
export class AuthorsService {
  constructor(private readonly authorsRepository: AuthorsRepository) {}

  async findAll() {
    return await this.authorsRepository.findAll();
  }

  async findOne(id: string) {
    return await this.authorsRepository.findOne(id);
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    try {
      const author = await this.authorsRepository.findOne(id);
      if (!author) {
        throw new HttpException('Autor não encontrado', HttpStatus.NOT_FOUND);
      }
      await this.authorsRepository.update(id, updateAuthorDto);
    } catch (error) {
      throw new HttpException(
        'Falha ao atualizar autor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
