import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';
import { CoursesModule } from './modules/courses/courses.module';
import { VideosModule } from './modules/videos/videos.module';
import * as morgan from 'morgan';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, EnrollmentsModule, CoursesModule, VideosModule],
  controllers: [],
  providers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(morgan('dev'))
      .forRoutes('*');
  }
}
