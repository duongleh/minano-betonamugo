import { Entity, Column,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn({})
  videoId : number

  @Column({nullable: true})
  courseId: number;

  @Column({nullable: false})
  title: string;

  @Column({})
  url: string;

  @Column({})
  time_stamp: string;

  @Column({})
  view: number
}