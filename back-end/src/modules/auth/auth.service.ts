import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../users/users.repository';
import { AuthDto } from './auth.dto';
import { JwtPayload } from './jwt-payload.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) { }

  async signUp(authDto: AuthDto): Promise<void> {
    const { email, password } = authDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return this.userRepository.createNewUser(email, hashedPassword, salt);
  }

  async signIn(authDto: AuthDto): Promise<{ accessToken: string }> {
    const { email, password } = authDto;

    const foundUser = await this.userRepository.findOne({ email });
    if (!foundUser) throw new UnauthorizedException('Invalid Credentials');

    const hashedPassword = await bcrypt.hash(password, foundUser.salt);
    if (hashedPassword !== foundUser.password) throw new UnauthorizedException('Invalid Credentials');

    const payload: JwtPayload = { name: foundUser.name, email };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken }
  }
}
