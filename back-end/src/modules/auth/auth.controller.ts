import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignUpDto, SignInDto } from './auth.dto';
import { GetUser } from '../../shared/Decorators/get-user.decorator';
import { JwtPayload } from './jwt-payload.model';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Sign Up' })
  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    return this.authService.signUp(signUpDto);
  }

  @ApiOperation({ summary: 'Sign In' })
  @Post('/signin')
  signIn(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(signInDto);
  }

  @ApiOperation({ summary: 'Verify Token' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @Get('verify')
  validateToken(@GetUser() user: JwtPayload): JwtPayload {
    return { name: user.name, email: user.email, role: user.role };
  }
}
