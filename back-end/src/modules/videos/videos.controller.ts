import { Controller, UseGuards, Param } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController, Override, ParsedRequest, CrudRequest, ParsedBody } from '@nestjsx/crud';
import { Video } from './videos.entity';
import { VideosService } from './videos.service';
import { CreateVideoDto, UpdateVideoDto } from './videos.dto';
import { RolesGuard } from '../../shared/Guards/roles.guard';

@ApiTags('Videos')
@ApiBearerAuth()
@UseGuards(AuthGuard())
@Crud({
  model: { type: Video },
  routes: {
    exclude: ['createManyBase', 'replaceOneBase'],
    deleteOneBase: { decorators: [UseGuards(RolesGuard)] },
  },
  dto: {
    create: CreateVideoDto,
    update: UpdateVideoDto,
  },
})
@Controller('videos')
export class VideosController implements CrudController<Video> {
  constructor(public service: VideosService) {}

  @Override()
  @UseGuards(RolesGuard)
  createOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: CreateVideoDto): Promise<Video> {
    return this.service.createOne(req, dto);
  }

  @Override()
  @UseGuards(RolesGuard)
  updateOne(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: UpdateVideoDto): Promise<Video> {
    console.log(dto);
    return this.service.updateOne(req, dto);
  }
}
