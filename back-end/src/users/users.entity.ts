import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Enrollment } from '../enrollments/enrollments.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  token: string;

  @Column()
  avatar: string;

  @Column()
  isblock: boolean;

  @Column({ nullable: false })
  role: boolean;

  @Column({ nullable: false })
  time_stamp: Date;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.userId)
  public enrollment = Enrollment;
}
