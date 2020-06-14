import { Repository, EntityRepository } from 'typeorm';
import { Video } from './videos.entity';

@EntityRepository(Video)
export class VideoRepository extends Repository<Video> {}
