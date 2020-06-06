import { Module } from '@nestjs/common';
import { EnrollmentsController } from './enrollments.controller';

@Module({
  controllers: [EnrollmentsController]
})
export class EnrollmentsModule {}
