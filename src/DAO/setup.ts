import { TypeORMConfig } from './TypeORM/configuration';

export class InitializeDB {
  private static connection: unknown;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getConnection() {
    if (!this.connection) {
      this.connection = TypeORMConfig.getTypeORMConnection();
    }

    return this.connection;
  }
}
