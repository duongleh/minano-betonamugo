import { Controller, UseGuards, UseInterceptors, Get, Post, Param, ClassSerializerInterceptor, ParseIntPipe, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudAuth, CrudController, Override, ParsedRequest, CrudRequest, ParsedBody, CrudRequestInterceptor } from '@nestjsx/crud';
import { Enrollment } from './enrollments.entity';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto, UpdateEnrollmentDto, CreateProgressDto } from './enrollments.dto';
import { GetUser } from '../../shared/Decorators/get-user.decorator';
import { User } from '../users/users.entity';

@ApiTags('Enrollments')
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Crud({
  model: { type: Enrollment },
  routes: { exclude: ['createManyBase', 'replaceOneBase', 'deleteOneBase'] },
  dto: {
    create: CreateEnrollmentDto,
    update: UpdateEnrollmentDto
  }
})
@CrudAuth({
  property: 'user',
  filter: (user: User) => (user.role ? {} : { userId: user.id })
})
@Controller('enrollments')
export class EnrollmentsController implements CrudController<Enrollment> {
  constructor(public service: EnrollmentsService) {}

  @Override('createOneBase')
  createEnrollment(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: CreateEnrollmentDto, @GetUser() user: User): Promise<Enrollment> {
    return this.service.createEnrollment(req, dto, user);
  }

  @Override('updateOneBase')
  updateEnrollment(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: UpdateEnrollmentDto, @GetUser() user: User): Promise<Enrollment> {
    return this.service.updateEnrollment(req, dto, user);
  }

  @ApiOperation({ summary: `Retrieve one Enrollment's progress` })
  @UseInterceptors(CrudRequestInterceptor, ClassSerializerInterceptor)
  @Get('/:id/progress')
  getManyProgress(@Param('id', ParseIntPipe) id: number, @GetUser() user: User): Promise<Enrollment> {
    return this.service.getProgress(id, user);
  }

  @ApiOperation({ summary: `Create one Enrollment's progress` })
  @UseInterceptors(CrudRequestInterceptor, ClassSerializerInterceptor)
  @Post('/:id/progress')
  createProgress(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateProgressDto, @GetUser() user: User): Promise<Enrollment> {
    return this.service.createProgress(id, dto, user);
  }
}
