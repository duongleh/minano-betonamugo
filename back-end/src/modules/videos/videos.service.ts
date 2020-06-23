import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Video } from './videos.entity';
import { VideoRepository } from './videos.repository';
import { CreateVideoDto, UpdateVideoDto } from './videos.dto';
import { CourseRepository } from '../courses/courses.repository';

@Injectable()
export class VideosService extends TypeOrmCrudService<Video> {
  constructor(@InjectRepository(VideoRepository) private videoRepository: VideoRepository, @InjectRepository(CourseRepository) private courseRepository: CourseRepository) {
    super(videoRepository);
  }

  async createOne(req: CrudRequest, dto: CreateVideoDto): Promise<Video> {
    const course = await this.courseRepository.findOne({ id: dto.courseId });
    if (!course) throw new NotFoundException('Course not found');
    return super.createOne(req, dto);
  }

  async updateOne(req: CrudRequest, dto: UpdateVideoDto): Promise<Video> {
    if (dto.hasOwnProperty('courseId')) {
      const course = await this.courseRepository.findOne({ id: dto.courseId });
      if (!course) throw new NotFoundException('Course not found');
    }
    return super.updateOne(req, dto);
  }
}
