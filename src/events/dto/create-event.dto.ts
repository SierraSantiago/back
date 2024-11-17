import { IsString, IsNotEmpty, IsArray, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsArray()
  @IsNotEmpty()
  models: string[];

  @IsString()
  @IsNotEmpty()
  image: string;
}
