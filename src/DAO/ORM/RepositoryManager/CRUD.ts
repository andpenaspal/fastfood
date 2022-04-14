export interface CRUD<P, T> {
  get(id: T): Promise<P>;

  getAll<P>(): Promise<P[]>;

  create(item: P): Promise<P>;

  update(item: P): Promise<P>;

  delete(id: T): Promise<P>;
}
