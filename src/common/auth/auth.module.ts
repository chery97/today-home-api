import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../../api/user/user.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from '../../api/user/entity/user.entity';
import { UserRepository } from '../../api/user/repository/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([user])],
  providers: [AuthService, UserService, JwtService, UserRepository],
  controllers: [AuthController],
})
export class AuthModule {}
