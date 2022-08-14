import { FOOD_TYPE, ORDER_TYPE, RESTAURANT } from '../definitions/definitions';
import foodTypes from '../definitions/foodTypes.json';
import menus from '../definitions/menus.json';
import restaurants from '../definitions/restaurants.json';
import InventoryItem from '../fakeDB/inventoryItem';
import FoodType from '../foodType';
import Ingredient from '../ingredient';
import OrderManager, { OrderManagerComplex } from '../orderManager';
import OrderType from '../orderType';
import Recipe from '../recipe';
import Restaurant from '../restaurant';

type RestaurantDefinition = { name: string; orderTypes: string[]; foodTypes: string[] };
type IngredientStockDefinition = { [key: string]: number[] };
type IngredientDefinition = { [key: string]: { [key: string]: number } };

type FoodTypeBuilt = [FoodType, InventoryItem[]];

class DataBuilder {
  public static buildRestaurants(): Restaurant[] {
    const restaurantsDefinition = restaurants.restaurants as RestaurantDefinition[];

    return restaurantsDefinition.map((restaurant) => {
      const restaurantName = restaurant.name as RESTAURANT;

      const restaurantOrderTypes = restaurant.orderTypes;
      const restaurantOrderTypesMapped = restaurantOrderTypes.map((orderType) => {
        if (!Object.keys(ORDER_TYPE).includes(orderType)) {
          throw new Error('Error on Restaurant Definition: Order Type not acceptable');
        }

        return ORDER_TYPE[orderType as keyof typeof ORDER_TYPE];
      });

      // This should be only for one as current specifications, but fuck it
      const restaurantFoodTypes = restaurant.foodTypes;
      const restaurantFoodTypesMapped = restaurantFoodTypes.map((foodType) => {
        if (!(Object.values(FOOD_TYPE) as string[]).includes(foodType)) {
          throw new Error('');
        }

        return FOOD_TYPE[foodType as keyof typeof FOOD_TYPE];
      });

      const orderTypesBuilt = restaurantOrderTypesMapped.map((orderType) => new OrderType(orderType));

      const [restaurantFoodTypeBuilt, restaurantIngredients] = this.foodTypeBuilder(restaurantFoodTypesMapped[0]);

      const orderManager =
        restaurantName === RESTAURANT.FAST_FOOD_ON_TIME
          ? new OrderManagerComplex(orderTypesBuilt)
          : new OrderManager(orderTypesBuilt);

      return new Restaurant(restaurantName, orderManager, restaurantFoodTypeBuilt, restaurantIngredients);
    });
  }

  private static foodTypeBuilder(foodType: FOOD_TYPE): FoodTypeBuilt {
    const recipes = this.buildMenu(foodType);
    const ingredientsStock = this.buildStock(foodType);

    const foodTypeBuilt = new FoodType(foodType, recipes);

    return [foodTypeBuilt, ingredientsStock];
  }

  private static buildStock(foodType: FOOD_TYPE): InventoryItem[] {
    try {
      const selectedFoodType = foodTypes[foodType] as IngredientStockDefinition;

      if (!selectedFoodType) {
        throw new Error(`Selected FoodType ${foodType} not in FoodType List`);
      }

      return Object.keys(selectedFoodType).map(
        (ingredient) => new InventoryItem(ingredient, selectedFoodType[ingredient][0], selectedFoodType[ingredient][1]),
      );
    } catch (err) {
      if (err instanceof Error) {
        throw new Error('An Error ocurred while trying to build a Stock list: ' + err.message);
      }

      throw new Error('An Error ocurred while trying to build a Stock list: ' + err);
    }
  }

  private static buildMenu(foodType: FOOD_TYPE): Recipe[] {
    try {
      const selectedMenuType = menus[foodType] as IngredientDefinition;

      if (!selectedMenuType) {
        throw new Error(`Selected FoodType ${foodType} not in Menus List`);
      }

      return Object.keys(selectedMenuType).map((menu) => {
        const specificMenu = selectedMenuType[menu];
        const ingredients = Object.keys(specificMenu).map(
          (ingredient) => new Ingredient(ingredient, specificMenu[ingredient]),
        );

        return new Recipe(menu, ingredients);
      });
    } catch (err) {
      if (err instanceof Error) {
        throw new Error('An Error ocurred while trying to build a Menu list: ' + err.message);
      }

      throw new Error('An Error ocurred while trying to build a Menu list: ' + err);
    }
  }
}

export default DataBuilder;
