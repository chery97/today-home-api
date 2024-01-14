import { Injectable } from '@nestjs/common';
import { user } from "./entity/user.entity";

@Injectable()
export class UserService {
  private readonly users = [
    {
      id: 1,
      userName: '강명제',
      password: 'changeme',
      userPhone: '010-4032-8730',
      userMail: 'changeme',
    },
    {
      id: 2,
      userName: '강명제1',
      password: 'guess',
      userPhone: '010-4032-8730',
      userMail: 'guess',
    },
  ];

  async findOne(userName: string): Promise<user | undefined> {
    return this.users.find(user => user.userName === userName);
  }
}
