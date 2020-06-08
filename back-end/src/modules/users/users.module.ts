import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UserRepository } from './users.repository';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([UserRepository])]
})
export class UsersModule { }
