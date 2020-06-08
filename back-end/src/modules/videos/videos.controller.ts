import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Videos')
@Controller('videos')
export class VideosController {}
