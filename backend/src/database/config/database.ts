import { Options } from 'sequelize';
// import pg from 'pg';

// const config: Options = {
//   username: process.env.MYSQL_USER || 'root',
//   password: process.env.MYSQL_PASSWORD || '123456',
//   host: process.env.MYSQL_HOST || 'localhost',
//   port: Number(process.env.MYSQL_PORT) || 3306,
//   database: process.env.MYSQL_NAME || 'PET-ADOPTION',
//   dialect: 'mysql',
//   dialectOptions: {
//     timezone: 'Z',
//   },
//   logging: false,
// }

const config: Options = {
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASSWORD || '123456',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  database: process.env.POSTGRES_DATABASE || 'PET-ADOPTION',
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

export = config;