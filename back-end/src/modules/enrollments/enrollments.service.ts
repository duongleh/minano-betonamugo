import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
  ForbiddenException,
  BadRequestException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Enrollment } from './enrollments.entity';
import { EnrollmentRepository } from './enrollments.repository';
import { CreateEnrollmentDto, UpdateEnrollmentDto, CreateProgressDto } from './enrollments.dto';
import { User } from '../users/users.entity';
import { CourseRepository } from '../courses/courses.repository';
import { VideoRepository } from '../videos/videos.repository';

@Injectable()
export class EnrollmentsService extends TypeOrmCrudService<Enrollment> {
  constructor(
    @InjectRepository(EnrollmentRepository) private enrollmentRepository: EnrollmentRepository,
    @InjectRepository(CourseRepository) private courseRepository: CourseRepository,
    @InjectRepository(VideoRepository) private videoRepository: VideoRepository
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

    let update;
    try {
      update = await super.updateOne(req, dto);
    } catch (error) {
      throw new InternalServerErrorException();
    }

    if (dto.hasOwnProperty('rate')) {
      const course = await this.courseRepository.findOne(enrollment.courseId, { relations: ['enrollments'] });
      let rateCount = 0;
      const rate = course.enrollments.reduce((total, current) => {
        if (current.rate !== null) {
          total += current.rate;
          rateCount += 1;
        }
        return total;
      }, 0);
      course.rate = Math.ceil(rate / rateCount);
      course.save();
    }

    return update;
  }

  async getProgress(id: number, user: User): Promise<Enrollment> {
    const enrollment = await this.enrollmentRepository.findOne(id, { relations: ['completedVideo'] });
    if (!enrollment) throw new NotFoundException(`Enrollment ${id} not found`);
    if (!user.role && enrollment.userId !== user.id) throw new ForbiddenException();
    return enrollment;
  }

  async createProgress(id: number, dto: CreateProgressDto, user: User): Promise<Enrollment> {
    const enrollment = await this.getProgress(id, user);

    const video = await this.videoRepository.findOne(dto.videoId);
    if (!video) throw new NotFoundException(`Video ${dto.videoId} not found`);
    if (video.courseId !== enrollment.courseId) throw new BadRequestException('Video not belong to course');
    const videos = await this.videoRepository.find({ where: { courseId: enrollment.courseId } });

    enrollment.completedVideo.push(video);
    enrollment.completionRatio = Number(((enrollment.completedVideo.length / videos.length) * 100).toFixed(2));
    await enrollment.save();
    return enrollment;
  }
}
