import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { user } from "./api/user/entity/user.entity";

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: false,
    ENTITIES: [user],
  };

  const ormconfig: TypeOrmModuleOptions = {
    type: 'mysql',
    database: 'today_home',
    host: '15.164.78.211',
    port: 3306,
    username: 'root',
    password: 'geek2020',
    logging: true,
    synchronize: commonConf.SYNCRONIZE,
    entities: commonConf.ENTITIES,
  };

  return ormconfig;
}

export { ormConfig };