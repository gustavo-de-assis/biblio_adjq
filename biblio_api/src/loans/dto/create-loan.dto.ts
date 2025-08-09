import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreateLoanDto {
  @IsString()
  userId: string;

  @IsString()
  bookId: string;

  @IsDate()
  @Type(() => Date)
  toReturn: Date;
}
