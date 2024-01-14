import { Module } from '@nestjs/common';
import { UserModule } from '../../api/user/user.module';
import { AuthService } from './auth.service';
import { UserService } from '../../api/user/user.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule],
  providers: [AuthService, UserService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
