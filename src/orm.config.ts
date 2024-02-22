import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { user } from "./api/user/entity/user.entity";
import { category } from "./api/category/entity/category.entity";

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: false,
    ENTITIES: [user, category],
  };

  const ormconfig: TypeOrmModuleOptions = {
    type: 'mysql',
    database: 'today_home',
    host: '3.37.78.80',
    port: 3306,
    username: 'root',
    password: 'geek@2020',
    logging: true,
    synchronize: commonConf.SYNCRONIZE,
    entities: commonConf.ENTITIES,
  };

  return ormconfig;
}

export { ormConfig };
