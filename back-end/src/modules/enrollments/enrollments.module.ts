import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnrollmentsController } from './enrollments.controller';
import { EnrollmentsService } from './enrollments.service';
import { EnrollmentRepository } from './enrollments.repository';
import { CourseRepository } from '../courses/courses.repository';
import { UserRepository } from '../users/users.repository';

@Module({
  controllers: [EnrollmentsController],
  imports: [TypeOrmModule.forFeature([EnrollmentRepository, CourseRepository, UserRepository])],
  providers: [EnrollmentsService]
})
export class EnrollmentsModule {}
