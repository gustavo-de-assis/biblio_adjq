import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
