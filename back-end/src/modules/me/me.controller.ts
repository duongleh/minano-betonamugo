import { Controller, UseGuards, UseInterceptors, ClassSerializerInterceptor, Get, Patch, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../../shared/Decorators/get-user.decorator';
import { User } from '../users/users.entity';
import { UpdateMeDto } from '../users/users.dto';
import { MeService } from './me.service';
import { UsersService } from '../users/users.service';

@ApiTags('Me')
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Controller('me')
export class MeController {
  constructor(private service: MeService, private userService: UsersService) {}

  @ApiOperation({ summary: 'Retrieve my User' })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getMe(@GetUser() user: User): Promise<User> {
    return this.service.getMe(user);
  }

  @ApiOperation({ summary: 'Update my User' })
  @Patch()
  updateMe(@Body() me: UpdateMeDto, @GetUser() user: User): Promise<void> {
    return this.userService.updateUser(me, user.id);
  }
}
