import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Course } from './courses.entity';
import { CourseRepository } from './courses.repository';

@Injectable()
export class CoursesService extends TypeOrmCrudService<Course> {
  constructor(@InjectRepository(CourseRepository) private courseRepository: CourseRepository) {
    super(courseRepository);
  }
}
