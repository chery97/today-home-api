import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { user } from '../entity/user.entity';

@Injectable()
export class UserRepository extends Repository<user> {
  constructor(private dataSource: DataSource) {
    super(user, dataSource.createEntityManager());
  }

  async findByUsername(username: string): Promise<user> {
    const result = await this.createQueryBuilder('user')
      .where('user.username = :username', { username: username })
      .getOne();
    return result;
  }
}
