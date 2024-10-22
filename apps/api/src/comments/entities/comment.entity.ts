import { User } from 'src/auth/entities/user.entity';
import { Post } from 'src/posts/entities';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  comment: string;

  @Column()
  postId: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}
