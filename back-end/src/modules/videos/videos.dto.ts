import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNumber, IsDefined } from 'class-validator';

export class CreateVideoDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  title: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  url: string;

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  courseId: number;
}

export class UpdateVideoDto extends PartialType(CreateVideoDto) {}
