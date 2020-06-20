import { Injectable, NotFoundException, ConflictException, InternalServerErrorException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Enrollment } from './enrollments.entity';
import { EnrollmentRepository } from './enrollments.repository';
import { CreateEnrollmentDto, UpdateEnrollmentDto } from './enrollments.dto';
import { User } from '../users/users.entity';
import { CourseRepository } from '../courses/courses.repository';

@Injectable()
export class EnrollmentsService extends TypeOrmCrudService<Enrollment> {
  constructor(
    @InjectRepository(EnrollmentRepository) private enrollmentRepository: EnrollmentRepository,
    @InjectRepository(CourseRepository) private courseRepository: CourseRepository
  ) {
    super(enrollmentRepository);
  }

  async createEnrollment(req: CrudRequest, dto: CreateEnrollmentDto, user: User): Promise<Enrollment> {
    const course = await this.courseRepository.findOne({ id: dto.courseId });
    if (!course) throw new NotFoundException('Course not found');
    dto.userId = user.id;

    try {
      return await super.createOne(req, dto);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Enrollment already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async updateEnrollment(req: CrudRequest, dto: UpdateEnrollmentDto, user: User): Promise<Enrollment> {
    const enrollment = await this.enrollmentRepository.findOne({ id: req.parsed.paramsFilter[0].value });
    if (!enrollment) throw new NotFoundException('Enrollment not found');
    if (enrollment.userId !== user.id) throw new ForbiddenException();

    try {
      return await super.updateOne(req, dto);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
