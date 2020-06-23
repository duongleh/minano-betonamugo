import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsDefined, IsUrl, IsNumber } from 'class-validator';
import { CreateVideoDto } from '../videos/videos.dto';

export class CreateCourseDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  name: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  title: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  description: string;

  @ApiProperty()
  @IsDefined()
  @IsUrl()
  thumbnail: string;

  @ApiProperty()
  @IsDefined()
  videos: Array<CreateVideoDto>;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
