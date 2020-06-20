import { ConnectionOptions } from 'typeorm';
import { SqlFormat } from './shared/Loggers/sql-format.logger';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'root',
  password: '123456',
  database: 'minano_betonamugo',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: { migrationsDir: 'src/migrations' },
  synchronize: false,
  migrationsRun: true,
  logger: new SqlFormat(['schema', 'error', 'warn', 'info', 'log', 'migration'])
};

export = config;
