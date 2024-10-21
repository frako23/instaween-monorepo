import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @MaxLength(2000)
  @IsNotEmpty()
  @Matches(/\S/, { message: 'Comment shouldnt content empty spaces' })
  comment: string;
}
