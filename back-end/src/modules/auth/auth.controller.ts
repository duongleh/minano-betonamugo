import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import { GetUser } from '../../shared/Decorators/get-user.decorator';
import { User } from '../users/users.entity';
import { JwtPayload } from './jwt-payload.model';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/signup')
  signUp(@Body() authDto: AuthDto): Promise<void> {
    return this.authService.signUp(authDto);
  }

  @Post('/signin')
  signIn(@Body() authDto: AuthDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(authDto);
  }

  @UseGuards(AuthGuard())
  @Get()
  validateToken(@GetUser() user: User): JwtPayload {
    return { name: user.name, email: user.email };
  }
}
