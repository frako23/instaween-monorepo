import { Transform } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateAuthDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  @MinLength(5)
  @Transform(({ value }) => value.trim())
  password: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  fullName: string;

  @IsBoolean()
  isActive: boolean;

  @IsString({ each: true })
  @IsArray()
  role: string[];
}
