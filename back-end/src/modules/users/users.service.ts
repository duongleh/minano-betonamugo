import { Injectable, ForbiddenException, Logger, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './users.entity';
import { UserRepository } from './users.repository';
import { UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  private logger = new Logger();

  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) {
    super(userRepository);
  }

  async getUser(req: CrudRequest, user: User): Promise<User> {
    if (user.role || user.id === req.parsed.paramsFilter[0].value) return super.getOne(req);
    else throw new ForbiddenException();
  }

  async updateOne(req: CrudRequest, dto: UpdateUserDto): Promise<User> {
    try {
      return await super.updateOne(req, dto);
    } catch (error) {
      this.logger.error(error.message);
      if (error.code === '23505') {
        throw new ConflictException('Email already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
