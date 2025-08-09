import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Address } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Address[] | null> {
    return await this.prisma.address.findMany();
  }

  async findOne(id: string): Promise<Address | null> {
    return await this.prisma.address.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateAddressDto) {
    try {
      await this.prisma.address.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new HttpException(
        'Houve um problema ao atualizar o endereço',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
