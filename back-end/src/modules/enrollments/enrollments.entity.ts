import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Unique } from 'typeorm';
import { User } from '../users/users.entity';
import { Course } from '../courses/courses.entity';

@Entity()
@Unique(['courseId', 'userId'])
export class Enrollment {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ default: 0 })
  rate: number;

  @Column({ default: null })
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  courseId: number;

  @Column()
  userId: number;

  @ManyToOne((type) => Course, (course) => course.enrollments)
  course: Course;

  @ManyToOne((type) => User, (user) => user.enrollments)
  user: User;
}
