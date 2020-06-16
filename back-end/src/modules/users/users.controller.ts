import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController, Override, ParsedRequest, ParsedBody, CrudRequest } from '@nestjsx/crud';
import { User } from './users.entity';
import { UpdateUserDto } from './users.dto';
import { RolesGuard } from '../../shared/Guards/roles.guard';
import { UsersService } from './users.service';
import { GetUser } from '../../shared/Decorators/get-user.decorator';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Crud({
  model: { type: User },
  query: { exclude: ['password', 'salt'] },
  routes: {
    exclude: ['createOneBase', 'createManyBase', 'replaceOneBase'],
    getManyBase: { decorators: [UseGuards(RolesGuard)] },
    deleteOneBase: { decorators: [UseGuards(RolesGuard)] }
  },
  dto: { update: UpdateUserDto }
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}

  @Override('getOneBase')
  getUser(@ParsedRequest() req: CrudRequest, @GetUser() user: User): Promise<User> {
    return this.service.getUser(req, user);
  }

  @Override()
  @UseGuards(RolesGuard)
  updateOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: UpdateUserDto): Promise<User> {
    return this.service.updateOne(req, dto);
  }
}
