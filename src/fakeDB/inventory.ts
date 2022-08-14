import Ingredient from '../ingredient';
import MapTransformer from '../utils/transformToIdMap';

import InventoryItem from './inventoryItem';

interface IngredientResume {
  itemName: string;
  used: number;
  refilled: number;
}

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

  public getInventoryItemsResume(): IngredientResume[] {
    return [...this.items.values()].map((item) => ({
      itemName: item.name,
      used: item.usedStock,
      refilled: item.reFilledStock,
    }));
  }
}

export default Inventory;
