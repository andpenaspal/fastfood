class Ingredient {
  private _name: string;
  protected _quantity: number;

  constructor(name: string, quantity: number) {
    this._name = name;
    this._quantity = quantity;
  }

  get name(): string {
    return this._name;
  }

  get quantity(): number {
    return this._quantity;
  }
}

export default Ingredient;
