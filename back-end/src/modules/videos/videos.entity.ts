import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Course } from '../courses/courses.entity';
import { Enrollment } from '../enrollments/enrollments.entity';

@Entity()
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column({ default: 0 })
  viewCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  courseId: number;

  @ManyToOne((type) => Course, (course) => course.videos, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  course: Course;

  @ManyToMany((type) => Enrollment, (enrollment) => enrollment.completedVideo)
  enrollments: Enrollment[];
}
