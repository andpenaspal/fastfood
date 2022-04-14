import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { RecipeIngredient } from './recipeIngredient';
import { Restaurant } from './restaurant';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'recipe_id' })
  recipeId!: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.recipes, { nullable: false })
  restaurant!: Restaurant;

  @Column({ type: 'varchar', name: 'recipe_name', nullable: false, comment: 'Name of the Recipe' })
  recipeName!: string;

  @Column({
    type: 'bigint',
    nullable: false,
    default: 0,
    comment: 'Number of times this Recipe has been ordered in the Restaurant',
  })
  orders!: number;

  @Column({ type: 'varchar', name: 'food_type', nullable: false })
  foodType!: string;

  @OneToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.recipe, {
    nullable: true,
  })
  recipeIngredients!: RecipeIngredient[];
}
