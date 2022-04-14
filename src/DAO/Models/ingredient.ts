interface IngredientOptions {
  ingredientId?: number;
  ingredientName: string;
  stock: number;
  maxStock: number;
  minStock: number;
  reFilledStock: number;
}

export class Ingredient {
  private _ingredientId?: number;
  private _ingredientName: string;
  private _stock: number;
  private _maxStock: number;
  private _minStock: number;
  private _reFilledStock: number;

  constructor({ ingredientId, ingredientName, stock, maxStock, minStock, reFilledStock }: IngredientOptions) {
    this._ingredientId = ingredientId;
    this._ingredientName = ingredientName;
    this._stock = stock;
    this._maxStock = maxStock;
    this._minStock = minStock;
    this._reFilledStock = reFilledStock;
  }

  get ingredientId(): number | undefined {
    return this._ingredientId;
  }

  get ingredientName(): string {
    return this._ingredientName;
  }

  get stock(): number {
    return this._stock;
  }

  get maxStock(): number {
    return this._maxStock;
  }

  get minStock(): number {
    return this._minStock;
  }

  get reFilledStock(): number {
    return this._reFilledStock;
  }

  useIngredient(quantity: number): number {
    this._stock -= quantity;

    if (!this.hasEnoughStock()) {
      this.reFillStock();
    }

    return this._stock;
  }

  private hasEnoughStock(): boolean {
    return this._stock > this._minStock;
  }

  private reFillStock(): number {
    const filledStock = this._maxStock - this._stock;
    this._stock = this._maxStock;
    this._reFilledStock += filledStock;

    return this._stock;
  }
}
