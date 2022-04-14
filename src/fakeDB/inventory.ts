import Ingredient from '../ingredient';
import MapTransformer from '../utils/transformToIdMap';

import InventoryItem from './inventoryItem';

class Inventory {
  private items: Map<string, InventoryItem>;

  constructor(items: InventoryItem[]) {
    this.items = MapTransformer.transformObjectArrayToIdMap(items);
  }

  public useIngredient(ingredient: Ingredient) {
    if (!this.items.has(ingredient.name)) {
      throw new Error();
    }

    const inventoryItem = this.items.get(ingredient.name) as InventoryItem;

    return inventoryItem.useIngredient(ingredient.quantity);
  }

  public useMultipleIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => this.useIngredient(ingredient));
  }

  public getQuantityRefilled(): Ingredient[] {
    return [...this.items.values()].map((item) => new Ingredient(item.name, item.reFilledStock));
  }
}

export default Inventory;
