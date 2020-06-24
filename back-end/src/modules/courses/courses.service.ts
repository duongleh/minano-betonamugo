import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Course } from './courses.entity';
import { CourseRepository } from './courses.repository';
import { CrudRequest } from '@nestjsx/crud';
import { VideoRepository } from '../videos/videos.repository';
import { CreateCourseDto } from './courses.dto';

@Injectable()
export class CoursesService extends TypeOrmCrudService<Course> {
  constructor(
    @InjectRepository(CourseRepository) private courseRepository: CourseRepository,
    @InjectRepository(VideoRepository) private videoRepository: VideoRepository
  ) {
    super(courseRepository);
  }

  async createOne(req: CrudRequest, dto: CreateCourseDto): Promise<Course> {
    const course = await super.createOne(req, dto);
    if (dto.videos.length) {
      const videos = dto.videos.map((el) => ({ ...el, courseId: course.id }));
      await this.videoRepository.save(videos);
    }
    return course;
  }
}
