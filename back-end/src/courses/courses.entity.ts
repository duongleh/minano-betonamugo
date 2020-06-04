import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Enrollment } from "../enrollments/enrollments.entity"
import { Video } from 'src/videos/videos.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn({})
  courseId : number

  @Column({nullable: true})
  owner: number;

  @Column({nullable: false})
  name: string;

  @Column({})
  description: string;

  @Column({})
  thumbnail: string;

  @Column({})
  views: number;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.courseId)
  public enrollment: Enrollment

  @OneToMany(() => Video, (video) => video.courseId)
  public video: Video
}