import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function ormConfig(): TypeOrmModuleOptions {
  const commonConf = {
    SYNCRONIZE: true,
    ENTITIES: [],
  };

  const ormconfig: TypeOrmModuleOptions = {
    type: 'mysql',
    database: 'today_home',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rkdaudwp123!',
    logging: true,
    synchronize: commonConf.SYNCRONIZE,
    entities: commonConf.ENTITIES,
  };

  return ormconfig;
}

export { ormConfig };