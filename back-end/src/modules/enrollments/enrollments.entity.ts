import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Unique, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../users/users.entity';
import { Course } from '../courses/courses.entity';
import { Video } from '../videos/videos.entity';
import { Transform } from 'class-transformer';

const transformCompletedVideo = (completedVideo: Video[]) => {
  if (Array.isArray(completedVideo)) {
    return completedVideo.map((video) => video.id);
  } else {
    return completedVideo;
  }
};

@Entity()
@Unique(['courseId', 'userId'])
export class Enrollment extends BaseEntity {
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({ default: null })
  rate: number;

  @Column({ default: null })
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  courseId: number;

  @Column()
  userId: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  completionRatio: number;

  @ManyToOne((type) => Course, (course) => course.enrollments)
  course: Course;

  @ManyToOne((type) => User, (user) => user.enrollments)
  user: User;

  @ManyToMany((type) => Video, (video) => video.enrollments)
  @JoinTable({ name: 'progress' })
  @Transform(transformCompletedVideo)
  completedVideo: Video[];
}
