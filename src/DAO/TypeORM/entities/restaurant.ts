import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Ingredient } from './ingredient';
import { Recipe } from './recipe';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'restaurant_id' })
  restaurantId!: number;

  @Column({ type: 'varchar', name: 'restaurant_name', comment: 'Name of the Restaurant' })
  restaurantName!: string;

  @OneToMany(() => Recipe, (recipe) => recipe.restaurant, { nullable: true })
  recipes!: Recipe[];

  @OneToMany(() => Ingredient, (inventoryIngredient) => inventoryIngredient.restaurant)
  inventoryIngredients!: Ingredient[];
}
