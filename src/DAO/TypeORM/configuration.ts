import { DataSource } from 'typeorm';

export class TypeORMConfig {
  private static dataSource: DataSource;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getTypeORMConnection() {
    if (!this.dataSource) {
      this.dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: true,
        logging: false,
        entities: ['src/DAO/TypeORM/entities/**/*.ts'],
        // migrations: ['src/database/migrations/**/*.ts'],
      });
    }

    return this.dataSource.initialize();
  }
}
