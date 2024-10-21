import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DataSource, Repository } from 'typeorm';
import { Post, PostImage } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { validate as isUUID } from 'uuid';
import { User } from '../auth/entities/user.entity';

@Injectable()
export class PostsService {
  private readonly logger = new Logger('PostsService');
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(PostImage)
    private readonly postImageRepository: Repository<PostImage>,

    private readonly dataSource: DataSource,
  ) {}

  async create(createPostDto: CreatePostDto, user: User) {
    try {
      const { images = [], ...postDetails } = createPostDto;
      const post = this.postRepository.create({
        ...postDetails,
        user,
        images: images.map((image) =>
          this.postImageRepository.create({ url: image }),
        ),
      });

      await this.postRepository.save(post);

      return { ...postDetails, images };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const post = await this.postRepository.find({
      take: limit,
      skip: offset,
      relations: {
        images: true,
      },
    });

    return post.map((post) => ({
      ...post,
      images: post.images.map((img) => img.url),
    }));
  }

  async findOne(term: string) {
    let post: Post;

    if (isUUID(term)) {
      post = await this.postRepository.findOneBy({ id: term });
    }

    // const post = await this.postRepository.findOneBy({id: term});

    if (!post) {
      throw new NotFoundException(`Post with id: ${term} not found`);
    }

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto, user: User) {
    const { images, ...toUpload } = updatePostDto;

    const post = await this.postRepository.preload({
      id,
      ...toUpload,
    });

    if (!post) {
      throw new BadRequestException(`Post with id: ${id} not found`);
    }

    //Create query runner

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (images) {
        await queryRunner.manager.delete(PostImage, { post: { id } });

        post.images = images.map((image) =>
          this.postImageRepository.create({ url: image }),
        );
      }
      post.user = user;
      await queryRunner.manager.save(post);
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOnePlain(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const post = await this.findOne(id);

    await this.postRepository.remove(post);

    return;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check logs');
  }

  async findOnePlain(term: string) {
    const { images = [], ...rest } = await this.findOne(term);

    return {
      ...rest,
      images: images.map((img) => img.url),
    };
  }

  async deleteAllPosts() {
    const query = this.postRepository.createQueryBuilder('post');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
