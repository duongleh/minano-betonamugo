import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepository } from './courses.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [CoursesController],
  imports: [TypeOrmModule.forFeature([CourseRepository]), AuthModule],
  providers: [CoursesService]
})
export class CoursesModule {}
