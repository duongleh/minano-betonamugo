import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './users.entity';
import { UserRepository } from './users.repository';
import { UpdateUserDto, UpdateMeDto } from './users.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository, private authService: AuthService) {
    super(userRepository);
  }

  async updateUser(dto: UpdateUserDto | UpdateMeDto, id: number): Promise<void> {
    if (dto.hasOwnProperty('password')) {
      const { hashedPassword, salt } = await this.authService.hashPassword(dto.password);
      dto.password = hashedPassword;
      dto.salt = salt;
    }
    await this.userRepository.updateUser(dto, id);
  }
}
