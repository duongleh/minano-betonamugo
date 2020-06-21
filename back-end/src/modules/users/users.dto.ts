import { ApiPropertyOptional, PickType } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, IsBoolean, IsUrl, MinLength, MaxLength, Matches } from 'class-validator';

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

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak'
  })
  password: string;

  salt: string;
}

export class UpdateMeDto extends PickType(UpdateUserDto, ['name', 'avatar', 'password', 'salt'] as const) {}
