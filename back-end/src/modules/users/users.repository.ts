import { Repository, EntityRepository } from 'typeorm';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import { User } from './users.entity';
import { UpdateMeDto, UpdateUserDto } from './users.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createNewUser(name: string, email: string, password: string, salt: string): Promise<void> {
    const user = new User();
    user.name = name;
    user.email = email;
    user.salt = salt;
    user.password = password;

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async updateUser(me: UpdateUserDto | UpdateMeDto, id: number): Promise<void> {
    try {
      await this.update(id, me);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
