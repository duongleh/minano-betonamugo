import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users/users.repository';
import { User } from '../users/users.entity';

@Injectable()
export class MeService {
  constructor(private userRepository: UserRepository) {}

  async getMe(user: User): Promise<User> {
    return await this.userRepository.findOne(user.id);
  }
}
