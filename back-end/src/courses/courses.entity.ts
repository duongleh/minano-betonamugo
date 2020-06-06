import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/users.entity';
import { Video } from '../videos/videos.entity';
import { Enrollment } from '../enrollments/enrollments.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  thumbnail: string;

  @Column()
  viewCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(type => Video, video => video.course)
  videos: Video[];

  @OneToMany(type => Enrollment, enrollment => enrollment.course)
  enrollments: Enrollment[];

  @ManyToOne(type => User, user => user.courses)
  owner: User;
}
