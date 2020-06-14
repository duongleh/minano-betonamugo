import { Repository, EntityRepository } from 'typeorm';
import { Course } from './courses.entity';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {}
