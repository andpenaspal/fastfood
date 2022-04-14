export class Restaurant {
  private _restaurantId: number | undefined;
  private _restaurantName: string;

  constructor(restaurantName: string, restaurantId?: number) {
    this._restaurantId = restaurantId;
    this._restaurantName = restaurantName;
  }

  get restaurantId(): number | undefined {
    return this._restaurantId;
  }

  get restaurantName(): string {
    return this._restaurantName;
  }
}
