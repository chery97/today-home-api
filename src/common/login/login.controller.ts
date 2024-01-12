import {Controller, Post, Req} from '@nestjs/common';
import { LoginService } from './login.service';
import {Request} from "express";
import * as dotenv from 'dotenv';

dotenv.config();

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Post()
    login(@Req() request: Request) {
        // return (`${process.env.JWT_SECRET_KEY}`)
        const { email, password } = request.body;
        return this.loginService.login(email, password);
    }
}
