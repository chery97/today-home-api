import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from './entity/user.entity';
import * as bcrypt from 'bcrypt';
import { JoinUserDto } from './dto/joinUserDto';

@Controller('user')
export class UserController {
  PASSWORD_SALT = 10;
  constructor(private readonly userService: UserService) {}

  @Post('/join')
  async joinUser(@Body() joinUserDto: JoinUserDto): Promise<user> {
    const hashedPassword = await bcrypt.hash(
      joinUserDto.password,
      this.PASSWORD_SALT,
    );
    const user = {
      ...joinUserDto,
      password: hashedPassword,
    };
    return this.userService.join(user);
  }
}
