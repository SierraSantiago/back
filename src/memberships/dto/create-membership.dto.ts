import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateMembershipDto {
  @IsString()
  @IsNotEmpty()
  tier: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsArray()
  @IsNotEmpty()
  benefits: string[];
}
