import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostImage } from './post-image.entity';
import { User } from 'src/auth/entities/user.entity';
import { Comments } from 'src/comments/entities/comment.entity';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    nullable: true,
  })
  description: string;

  @OneToMany(() => PostImage, (postImage) => postImage.post, {
    cascade: true,
    eager: true,
  })
  images: PostImage[];

  @ManyToOne(() => User, (user) => user.post)
  user: User;

  @OneToMany(() => Comments, (comment) => comment.post)
  comments: Comments;
}
