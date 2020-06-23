import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';
import { IsString, IsNumber, IsDefined, IsUrl } from 'class-validator';

export class CreateVideoDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  title: string;

  @ApiProperty()
  @IsDefined()
  @IsUrl()
  url: string;

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  courseId: number;
}

export class CreateVideoWithCourseDto extends OmitType(CreateVideoDto, ['courseId'] as const) {}
export class UpdateVideoDto extends PartialType(CreateVideoDto) {}
