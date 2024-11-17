import { IsArray, IsString, IsOptional, IsInt, IsNotEmpty } from 'class-validator';

export class CreateModelDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  images: string[];

  @IsString()
  description: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  height?: string;

  @IsOptional()
  @IsString()
  hair_color?: string;

  @IsOptional()
  @IsString()
  eye_color?: string;

  @IsOptional()
  @IsInt()
  experience?: number;

  @IsOptional()
  @IsString()
  country?: string;
}
