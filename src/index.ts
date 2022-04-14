import dotenv from 'dotenv-safe';
// import { DataSource } from 'typeorm';

dotenv.config();

// export const AppDataSource = new DataSource({
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   synchronize: true,
//   logging: false,
//   entities: ['src/DAO/TypeORM/entities/**/*.ts'],
//   // migrations: ['src/database/migrations/**/*.ts'],
// });

// const whatever = async () => {
//   await AppDataSource.initialize();
// };

// whatever();
