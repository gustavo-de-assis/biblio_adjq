import { Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { LoansRepository } from './loans.repository';

@Injectable()
export class LoansService {
  constructor(private readonly loansRepository: LoansRepository) {}

  async create(createLoanDto: CreateLoanDto) {
    return await this.loansRepository.create(createLoanDto);
  }

  async findAll() {
    return await this.loansRepository.findAll();
  }

  async findOne(id: string) {
    return await this.loansRepository.findOne(id);
  }

  async update(id: string, updateLoanDto: UpdateLoanDto) {
    return await this.loansRepository.update(id, updateLoanDto);
  }
}
