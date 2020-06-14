import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsDefined } from 'class-validator';

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
  @IsString()
  thumbnail: string;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
