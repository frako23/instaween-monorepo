import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaginationDto } from '../../common/dtos/pagination.dto';
import { Post } from 'src/posts/entities';
import { Comments } from 'src/comments/entities/comment.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @Column('text', {
    nullable: false,
  })
  fullName: string;

  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  @Column('text', {
    array: true,
    default: ['user'],
  })
  role: string[];

  @OneToMany(() => Post, (post) => post.user)
  post: Post;

  @OneToMany(() => Comments, (comment) => comment.user)
  comments: Comments;

  @BeforeInsert()
  checkFieldsBeforeInser() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInser();
  }
}
