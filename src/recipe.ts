import MapTransformer from './utils/transformToIdMap';
import Ingredient from './ingredient';

class Recipe {
  private _name: string;
  private _ingredients: Map<string, Ingredient>;

  constructor(name: string, ingredients: Ingredient[]) {
    this._name = name;
    this._ingredients = MapTransformer.transformObjectArrayToIdMap(ingredients);
  }

  get name(): string {
    return this._name;
  }

  get ingredients(): Ingredient[] {
    return [...this._ingredients.values()];
  }
}

export default Recipe;
