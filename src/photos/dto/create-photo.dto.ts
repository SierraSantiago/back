import { IsNotEmpty, IsString, IsNumber, IsUrl } from 'class-validator';

export class CreatePhotoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
