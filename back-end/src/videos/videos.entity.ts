import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Course } from '../courses/courses.entity';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  viewCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  courseId: number;

  @ManyToOne(type => Course, course => course.videos)
  course: Course;
}
