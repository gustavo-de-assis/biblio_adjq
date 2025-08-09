import { Injectable } from '@nestjs/common';
import { Loan } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoansRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateLoanDto): Promise<Loan> {
    return this.prisma.loan.create({ data });
  }

  async findAll(): Promise<Loan[] | null> {
    return this.prisma.loan.findMany();
  }

  async findOne(id: string): Promise<Loan | null> {
    return this.prisma.loan.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateLoanDto): Promise<Loan | null> {
    return this.prisma.loan.update({ where: { id }, data });
  }
}
