import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { Course } from '../courses/courses.entity';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column()
  rate: number;

  @Column()
  comment: string;

  @Column()
  achievement: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  userId: number;

  @Column()
  courseId: number;

  @ManyToOne(type => User, user => user.enrollments)
  user: User;

  @ManyToOne(type => Course, course => course.enrollments)
  course: Course;
}
