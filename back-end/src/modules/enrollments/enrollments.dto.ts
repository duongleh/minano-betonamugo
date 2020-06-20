import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEnrollmentDto {
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  courseId: number;

  userId: number;
}

export class UpdateEnrollmentDto {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  rate: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  comment: string;
}
