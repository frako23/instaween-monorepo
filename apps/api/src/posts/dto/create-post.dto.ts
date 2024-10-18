import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsString({ each: true })
  @IsArray()
  images: string[];
}
