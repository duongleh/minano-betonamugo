import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
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

  @Column({ default: 0 })
  viewCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  ownerId: number;

  @ManyToOne((type) => User, (user) => user.courses)
  owner: User;

  @OneToMany((type) => Video, (video) => video.course, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  videos: Video[];

  @OneToMany((type) => Enrollment, (enrollment) => enrollment.course)
  enrollments: Enrollment[];
}
