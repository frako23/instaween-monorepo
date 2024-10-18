import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  email: string;

  @Column('text', {
    nullable: false,
  })
  password: string;

  @Column('text', {
    nullable: false,
  })
  fullName: string;

  @Column('bool')
  isActive: boolean;

  @Column('text', {
    array: true,
  })
  role: string[];
}
