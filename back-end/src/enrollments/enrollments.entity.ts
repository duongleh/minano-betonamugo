import { Entity, Column,PrimaryGeneratedColumn , ManyToOne } from 'typeorm';
import { User } from '../users/users.entity'
import { Course } from '../courses/courses.entity'

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn({})
  enrollment : number

  @Column({nullable: true})
  userId: number;

  @Column({nullable: true})
  courseId: string;

  @Column({nullable: true})
  rate: number;

  @Column({nullable: false})
  password: string;

  @Column({})
  achievement: string;

  @Column({})
  time_stamp: string;

  @ManyToOne(() => User, (user) => user.userId)
  public user: User

  @ManyToOne(() => Course, (course) => course.courseId)
  public course: Course
}