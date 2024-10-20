import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { validate as isUUID } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from './entities/comment.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { Post } from 'src/posts/entities';

@Injectable()
export class CommentsService {
  private readonly logger = new Logger('CommentsService');

  constructor(
    @InjectRepository(Comments)
    private readonly commentsRepository: Repository<Comments>,

    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createCommentDto: CreateCommentDto, user: User, postId: string) {
    try {
      const post = await this.postRepository.findOneBy({ id: postId });

      if (!post)
        throw new NotFoundException(`Post with ID: ${postId} doesnt exist`);

      const comment = this.commentsRepository.create({
        ...createCommentDto,
        user,
        post,
      });

      await this.commentsRepository.save(comment);

      return { comment };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const comment = await this.commentsRepository.find({
      take: limit,
      skip: offset,
    });

    return comment;
  }

  async findOne(term: string) {
    let comment: Comments;

    if (isUUID(term)) {
      comment = await this.commentsRepository.findOneBy({ id: term });
    }

    if (!comment) {
      throw new NotFoundException(`Comment with term: ${term} not found`);
    }

    return comment;
  }

  async update(term: string, updateCommentDto: UpdateCommentDto) {
    await this.findOne(term);

    const comment = await this.commentsRepository.update(term, {
      ...updateCommentDto,
    });

    if (!comment) {
      throw new BadRequestException(`Comment with term: ${term} not found`);
    }

    return { term, ...updateCommentDto };
  }

  async remove(id: string) {
    const comment = await this.findOne(id);

    await this.commentsRepository.remove(comment);

    return;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check logs');
  }
}
