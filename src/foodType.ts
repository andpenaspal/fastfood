import { FOOD_TYPE } from './definitions/definitions';
import MapTransformer from './utils/transformToIdMap';
import Recipe from './recipe';

class FoodType {
  private _name: FOOD_TYPE;
  private recipes: Map<string, Recipe>;

  constructor(name: FOOD_TYPE, recipes: Recipe[]) {
    this._name = name;
    this.recipes = MapTransformer.transformObjectArrayToIdMap(recipes);
  }

  get name(): FOOD_TYPE {
    return this._name;
  }

  public getRecipe(recipeName: string): Recipe {
    if (!this.recipes.has(recipeName)) {
      throw new Error();
    }

    return this.recipes.get(recipeName) as Recipe;
  }

  public getRecipes() {
    return [...this.recipes.keys()];
  }
}

export default FoodType;
