import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';
import { IsString, IsDefined, IsUrl, IsArray, ValidateNested } from 'class-validator';
import { CreateVideoWithCourseDto } from '../videos/videos.dto';
import { Type } from 'class-transformer';

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

  @ApiProperty({ type: [CreateVideoWithCourseDto] })
  @IsDefined()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateVideoWithCourseDto)
  videos: CreateVideoWithCourseDto[];

  ownerId: number;
}

export class UpdateCourseDto extends PartialType(OmitType(CreateCourseDto, ['videos'] as const)) {}
