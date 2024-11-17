import { IsString, IsNotEmpty, IsOptional, IsDecimal } from 'class-validator';

export class CreateMakeupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDecimal()
  @IsNotEmpty()
  price: number;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  slug: string;
}
