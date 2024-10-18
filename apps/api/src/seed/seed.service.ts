import { Injectable } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly postService: PostsService) {}
  async runSeed() {
    await this.insertNewProducts();
    return 'SEED EXECUTED';
  }

  private async insertNewProducts() {
    await this.postService.deleteAllPosts();

    const posts = initialData.post;

    const insertPromises = [];

    posts.forEach((post) => {
      insertPromises.push(this.postService.create(post));
    });

    await Promise.all(insertPromises);

    return true;
  }
}
