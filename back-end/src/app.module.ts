import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { CoursesModule } from './courses/courses.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, EnrollmentsModule, CoursesModule, VideosModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
