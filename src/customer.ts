import { ORDER_TYPE, RESTAURANT } from './definitions/definitions';

export interface RestaurantMenu {
  name: RESTAURANT;
  orderTypes: ORDER_TYPE[];
  menu: string[];
}

export interface RestaurantOrder {
  restaurantName: RESTAURANT;
  orderType: ORDER_TYPE;
  menuItem: string;
}

export default class Customer {
  public static makeRandomOrder(restaurantsMenu: RestaurantMenu[]): RestaurantOrder {
    const restaurant = this.pickRandom(restaurantsMenu);
    const orderType = this.pickRandom(restaurant.orderTypes);
    const menuItem = this.pickRandom(restaurant.menu);

    return { restaurantName: restaurant.name, orderType, menuItem };
  }

  private static pickRandom<Item>(items: Item[]) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
}
