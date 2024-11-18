// src/contactus/dto/create-contactus.dto.ts

import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateContactusDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  comment: string;
}
