import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController, Override, ParsedRequest, ParsedBody, CrudRequest } from '@nestjsx/crud';
import { Course } from './courses.entity';
import { CoursesService } from './courses.service';
import { CreateCourseDto, UpdateCourseDto } from './courses.dto';
import { GetUser } from 'src/shared/Decorators/get-user.decorator';
import { User } from '../users/users.entity';
import { RolesGuard } from '../../shared/Guards/roles.guard';

@ApiTags('Courses')
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Crud({
  model: { type: Course },
  routes: {
    exclude: ['createManyBase', 'replaceOneBase'],
    updateOneBase: { decorators: [UseGuards(RolesGuard)] },
    deleteOneBase: { decorators: [UseGuards(RolesGuard)] }
  },
  dto: {
    create: CreateCourseDto,
    update: UpdateCourseDto
  }
})
@Controller('courses')
export class CoursesController implements CrudController<Course> {
  constructor(public service: CoursesService) {}

  @Override()
  @UseGuards(RolesGuard)
  createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: CreateCourseDto, @GetUser() user: User): Promise<Course> {
    return this.service.createOne(req, { ...dto, ownerId: user.id });
  }
}
