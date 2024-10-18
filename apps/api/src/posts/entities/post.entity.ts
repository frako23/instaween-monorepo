import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PostImage } from './post-image.entity';

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
}
