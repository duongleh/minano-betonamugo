import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, IsBoolean, IsUrl, IsEmpty } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  avatar: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isBlock: boolean;

  @IsEmpty()
  role: boolean;
}
