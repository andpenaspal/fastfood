export class RecipeIngredient {
  private _recipeId: number | undefined;
  private _ingredientId: number;
  private _quantity: number;

  constructor(ingredientId: number, quantity: number, recipeId?: number) {
    this._recipeId = recipeId;
    this._ingredientId = ingredientId;
    this._quantity = quantity;
  }

  get recipeId(): number | undefined {
    return this._recipeId;
  }

  get ingredientId(): number {
    return this._ingredientId;
  }

  get quantity(): number {
    return this._quantity;
  }
}
