import { Module, NestModule, MiddlewareConsumer, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';
import { CoursesModule } from './modules/courses/courses.module';
import { VideosModule } from './modules/videos/videos.module';
import { AuthModule } from './modules/auth/auth.module';
import { MeModule } from './modules/me/me.module';
import config = require('./ormconfig');
import morgan = require('morgan');

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, EnrollmentsModule, CoursesModule, VideosModule, AuthModule, MeModule],
  controllers: [],
  providers: [Logger]
})
export class AppModule implements NestModule {
  constructor(private logger: Logger) {}

  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(
        morgan('dev', {
          stream: {
            write: (message) => this.logger.log(message.substring(0, message.lastIndexOf('\n')), 'HTTP Request')
          }
        })
      )
      .forRoutes('*');
  }
}
