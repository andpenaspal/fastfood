interface RecipeOptions {
  recipeId?: number;
  recipeName: string;
  orders: number;
  foodType: string;
}

export class Recipe {
  private _recipeId: number | undefined;
  private _recipeName: string;
  private _orders: number;
  private _foodType: string;

  constructor({ recipeId, recipeName, orders, foodType }: RecipeOptions) {
    this._recipeId = recipeId;
    this._recipeName = recipeName;
    this._orders = orders;
    this._foodType = foodType;
  }

  get recipeId(): number | undefined {
    return this._recipeId;
  }

  get recipeName(): string {
    return this._recipeName;
  }

  get orders(): number {
    return this._orders;
  }

  get foodType(): string {
    return this._foodType;
  }
}
