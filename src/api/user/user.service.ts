import { Injectable } from '@nestjs/common';
import { user } from './entity/user.entity';
import { JoinUserDto } from './dto/joinUserDto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async join(joinUserDto: JoinUserDto): Promise<user> {
    const { id, userName, password, userPhone, userMail } = joinUserDto;
    // const user = await this.userRepository.findOne({ joinUserDto.userMail });
    // if (user) {
    //   throw new ConflictException('이미 등록된 이메일입니다.');
    // }
    const result = await this.userRepository.save({
      id,
      userName,
      password,
      userPhone,
      userMail,
    });

    return result;
  }

  // async findOne(userName: string): Promise<user | undefined> {
  //   return this.users.find((user) => user.userName === userName);
  // }
}
