import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressesRepository } from './addresses.repository';

@Injectable()
export class AddressesService {
  constructor(private readonly addressRepository: AddressesRepository) {}

  async findAll() {
    return await this.addressRepository.findAll();
  }

  async findOne(id: string) {
    return await this.addressRepository.findOne(id);
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    try {
      const address = await this.addressRepository.findOne(id);
      if (!address) {
        throw new HttpException(
          'Falha na atualização. Endereço não encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      return await this.addressRepository.update(id, updateAddressDto);
    } catch (error) {
      throw new HttpException(
        'Falha na atualização. Erro interno no servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
