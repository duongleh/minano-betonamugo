import { Controller, UseGuards, UseInterceptors, Get, Patch, Body, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController, Override, ParsedRequest, ParsedBody, CrudRequest, CrudRequestInterceptor } from '@nestjsx/crud';
import { User } from './users.entity';
import { UpdateUserDto, UpdateMeDto } from './users.dto';
import { RolesGuard } from '../../shared/Guards/roles.guard';
import { UsersService } from './users.service';
import { GetUser } from '../../shared/Decorators/get-user.decorator';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Crud({
  model: { type: User },
  routes: {
    exclude: ['createOneBase', 'createManyBase', 'replaceOneBase'],
    getOneBase: { decorators: [UseGuards(RolesGuard)] },
    getManyBase: { decorators: [UseGuards(RolesGuard)] },
    deleteOneBase: { decorators: [UseGuards(RolesGuard)] }
  },
  dto: { update: UpdateUserDto }
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}

  @ApiOperation({ summary: 'Retrieve my User' })
  @UseInterceptors(CrudRequestInterceptor, ClassSerializerInterceptor)
  @Get('/me')
  getMe(@GetUser() user: User): Promise<User> {
    return this.service.getMe(user);
  }

  @ApiOperation({ summary: 'Update my User' })
  @UseInterceptors(CrudRequestInterceptor)
  @Patch('/me')
  updateMe(@Body() me: UpdateMeDto, @GetUser() user: User): Promise<void> {
    return this.service.updateUser(me, user.id);
  }

  @Override()
  @UseGuards(RolesGuard)
  updateOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: UpdateUserDto): Promise<void> {
    return this.service.updateUser(dto, req.parsed.paramsFilter[0].value);
  }
}
