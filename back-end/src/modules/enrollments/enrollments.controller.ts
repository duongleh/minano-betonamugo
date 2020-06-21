import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudAuth, CrudController, Override, ParsedRequest, CrudRequest, ParsedBody } from '@nestjsx/crud';
import { Enrollment } from './enrollments.entity';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto, UpdateEnrollmentDto } from './enrollments.dto';
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
}
