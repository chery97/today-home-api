import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from "./orm.config";
import { UserModule } from './api/user/user.module';
import { LoginController } from './common/login/login.controller';
import { LoginModule } from './common/login/login.module';
import {LoginService} from "./common/login/login.service";
import {JwtService} from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    UserModule,
    LoginModule,
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService, JwtService],
})
export class AppModule {}
