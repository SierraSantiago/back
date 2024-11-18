
import { IsString, IsEmail, MaxLength } from 'class-validator';

export class CreateContactUsDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsString()
  comment: string;
}
