import DataBuilder from './utils/stockBuilder';
import Customer, { RestaurantMenu, RestaurantOrder } from './customer';
import Restaurant from './restaurant';

export default class FastFoodManager {
  public run() {
    let stop = false;

    const restaurants = DataBuilder.buildRestaurants();

    while (!stop) {
      const restaurantMenus = restaurants.map(
        (restaurant): RestaurantMenu => ({
          name: restaurant.name,
          orderTypes: restaurant.activeOrderTypes,
          menu: restaurant.getMenu(),
        }),
      );

      const order = Customer.makeRandomOrder(restaurantMenus);

      this.makeOrder(restaurants, order);

      stop = this.checkStopRunning(restaurants);
    }

    const resume = restaurants.map((restaurant) => ({ name: restaurant.name, ...restaurant.getFinalResume() }));

    console.dir(resume, { depth: null });
  }

  private makeOrder(restaurants: Restaurant[], { restaurantName, orderType, menuItem }: RestaurantOrder) {
    const selectedRestaurant = restaurants.find((restaurant) => restaurant.name === restaurantName);

    selectedRestaurant?.order(orderType, menuItem);
  }

  private checkStopRunning(restaurants: Restaurant[]) {
    return restaurants
      .map((restaurant) => restaurant.getActiveOrderTypesSuccessfulCount())
      .flat()
      .every((resume) => resume.successfulOrders >= 1000);
  }
}
