import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './orm.config';
import { UserModule } from './api/user/user.module';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './common/auth/auth.service';
import { AuthModule } from './common/auth/auth.module';
import { UserService } from './api/user/user.service';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './common/auth/auth.controller';
import { UserRepository } from './api/user/repository/user.repository';
import { UserController } from './api/user/user.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, JwtService, AuthService, UserService, UserRepository],
})
export class AppModule {}
