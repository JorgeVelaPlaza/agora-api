import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import { join } from 'path';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host:'localhost',
    port: 5432,
    username: 'gesproman_admin',
    password: 'jorgevela',
    database: 'gesproman',
    synchronize: true,
    logging: true,
    entities: [join(__dirname, './**/*.entity{.ts,.js}')],
}