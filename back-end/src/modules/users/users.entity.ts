import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, BaseEntity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Course } from '../courses/courses.entity';
import { Enrollment } from '../enrollments/enrollments.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  @Exclude()
  salt: string;

  @Column({ default: null })
  avatar: string;

  @Column({ default: false })
  isBlock: boolean;

  @Column({ default: false })
  role: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(type => Course, course => course.owner)
  courses: Course[];

  @OneToMany(type => Enrollment, enrollment => enrollment.course)
  enrollments: Enrollment[];
}
