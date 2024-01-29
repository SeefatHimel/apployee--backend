import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async login(data: LoginDto) {
    console.log('🚀 ~ AuthService ~ login ~ data:', data);
    if (data?.username !== 'admin' || data?.password !== 'admin') {
      throw new HttpException(
        'You are non Authorized',
        HttpStatus.UNAUTHORIZED,
      );
    }
    try {
      return { token: await this.jwtService.signAsync(data), role: 'ADMIN' };
    } catch (error) {
      console.log('🚀 ~ AuthService ~ login ~ error:', error);
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
