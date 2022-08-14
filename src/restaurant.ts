import { ORDER_TYPE, RESTAURANT } from './definitions/definitions';
import Inventory from './fakeDB/inventory';
import InventoryItem from './fakeDB/inventoryItem';
import FoodType from './foodType';
import OrderManager, { OrderManagerComplex } from './orderManager';

class Restaurant {
  private _name: RESTAURANT;
  private orderManager: OrderManager;
  private _foodType: FoodType;
  private _inventory: Inventory;

  constructor(
    name: RESTAURANT,
    orderManager: OrderManager | OrderManagerComplex,
    foodType: FoodType,
    inventoryItems: InventoryItem[],
  ) {
    this._name = name;
    this.orderManager = orderManager;
    this._foodType = foodType;
    this._inventory = new Inventory(inventoryItems);
  }

  get name(): RESTAURANT {
    return this._name;
  }

  get activeOrderTypes(): ORDER_TYPE[] {
    return this.orderManager.orderTypesName;
  }

  public getMenu(): string[] {
    return this._foodType.getRecipes();
  }

  public order(orderType: ORDER_TYPE, menuItem: string) {
    const isSuccessfulOrder = this.isSuccessfulOrder(orderType);

    this.orderManager.addOrder(orderType, isSuccessfulOrder);

    const menuItemIngredients = this._foodType.getRecipe(menuItem).ingredients;

    this._inventory.useMultipleIngredients(menuItemIngredients);
  }

  public getActiveOrderTypesSuccessfulCount() {
    const orderTypes = this.orderManager.getOrderTypesResume();
    const activeOrderTypes = orderTypes.filter((orderType) => !orderType.deactivated);
    const successfulCount = activeOrderTypes.map((orderType) => ({
      orderTypeName: orderType.orderType,
      successfulOrders: orderType.successfulOrders,
    }));

    return successfulCount;
  }

  public getFinalResume() {
    const orderResume = this.orderManager.getOrderTypesResume();
    const inventoryResume = this._inventory.getInventoryItemsResume();
    return { orderResume, inventoryResume };
  }

  private isSuccessfulOrder(orderType: ORDER_TYPE) {
    const orderDuration = Math.floor(Math.random() * 100 + 1);

    if (orderType === ORDER_TYPE.C && orderDuration > 50) {
      return false;
    }

    if (orderType !== ORDER_TYPE.C && orderDuration <= 10) {
      return false;
    }

    return true;
  }
}

export default Restaurant;
