import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepository } from './courses.repository';
import { VideoRepository } from '../videos/videos.repository';

@Module({
  controllers: [CoursesController],
  imports: [TypeOrmModule.forFeature([CourseRepository, VideoRepository])],
  providers: [CoursesService]
})
export class CoursesModule {}
