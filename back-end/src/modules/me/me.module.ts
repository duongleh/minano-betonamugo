import { Module } from '@nestjs/common';
import { MeController } from './me.controller';
import { MeService } from './me.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../users/users.repository';
import { EnrollmentRepository } from '../enrollments/enrollments.repository';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [MeController],
  imports: [TypeOrmModule.forFeature([UserRepository, EnrollmentRepository]), UsersModule],
  providers: [MeService]
})
export class MeModule {}
