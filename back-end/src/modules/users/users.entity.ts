import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Course } from '../courses/courses.entity';
import { Enrollment } from '../enrollments/enrollments.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @Column()
  avatar: string;

  @Column()
  isBlock: boolean;

  @Column()
  role: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(type => Course, course => course.owner)
  courses: Course[];

  @OneToMany(type => Enrollment, enrollment => enrollment.course)
  enrollments: Enrollment[];
}
