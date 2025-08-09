import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateAuthorDto } from 'src/authors/dto/create-author.dto';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  authorId?: string;

  @IsOptional()
  @Type(() => CreateAuthorDto)
  author?: CreateAuthorDto;

  @IsNumber()
  copies: number;

  @IsNumber()
  onLoan: number;

  @IsNumber()
  totalLoans: number;

  @IsString()
  resume?: string;
}
