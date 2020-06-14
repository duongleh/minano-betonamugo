import { IsEmail, IsString, MinLength, MaxLength, Matches, IsDefined } from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @MinLength(6)
  @MaxLength(30)
  name: string;

  @ApiProperty()
  @IsDefined()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak'
  })
  password: string;
}

export class SignInDto extends OmitType(SignUpDto, ['name'] as const) {}
