import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController, Override, ParsedRequest, ParsedBody, CrudRequest } from '@nestjsx/crud';
import { User } from './users.entity';
import { UpdateUserDto } from './users.dto';
import { RolesGuard } from '../../shared/Guards/roles.guard';
import { UsersService } from './users.service';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(AuthGuard(), RolesGuard)
@Crud({
  model: { type: User },
  routes: { exclude: ['createOneBase', 'createManyBase', 'replaceOneBase'] },
  dto: { update: UpdateUserDto }
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}

  @Override()
  updateOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: UpdateUserDto): Promise<void> {
    return this.service.updateUser(dto, req.parsed.paramsFilter[0].value);
  }
}
