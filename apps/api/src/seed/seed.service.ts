import { Injectable } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';
import { initialData } from './data/seed-data';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { first } from 'rxjs';

@Injectable()
export class SeedService {
  constructor(
    private readonly postService: PostsService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async runSeed() {
    await this.deleteTables();
    const firstUser = await this.insertUser();

    await this.insertNewProducts(firstUser);
    return 'SEED EXECUTED';
  }

  private async deleteTables() {
    await this.postService.deleteAllPosts();

    const queryBuilder = this.userRepository.createQueryBuilder();

    await queryBuilder.delete().where({}).execute();
  }

  private async insertUser() {
    const seedUsers = initialData.users;

    const users: User[] = [];

    seedUsers.forEach((user) => {
      users.push(this.userRepository.create(user));
    });

    const dbUsers = await this.userRepository.save(seedUsers);

    return dbUsers[0];
  }

  private async insertNewProducts(user: User) {
    await this.postService.deleteAllPosts();

    const posts = initialData.post;

    const insertPromises = [];

    posts.forEach((post) => {
      insertPromises.push(this.postService.create(post, user));
    });

    await Promise.all(insertPromises);

    return true;
  }
}
