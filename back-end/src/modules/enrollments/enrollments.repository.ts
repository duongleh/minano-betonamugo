import { Repository, EntityRepository } from 'typeorm';
import { Enrollment } from './enrollments.entity';

@EntityRepository(Enrollment)
export class EnrollmentRepository extends Repository<Enrollment> {}
