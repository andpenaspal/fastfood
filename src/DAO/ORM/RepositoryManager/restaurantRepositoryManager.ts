import { Restaurant } from '../../Models/restaurant';

import { CRUD } from './CRUD';

export interface RestaurantRepositoryManager extends CRUD<Restaurant, number> {
  ja: string;
}
