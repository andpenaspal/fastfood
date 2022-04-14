import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { Ingredient } from './ingredient';
import { Recipe } from './recipe';

@Entity()
export class RecipeIngredient {
  @PrimaryColumn({ type: 'bigint', name: 'recipe_id' })
  @ManyToOne(() => Recipe, (recipe) => recipe.recipeIngredients, { nullable: false })
  @JoinColumn({ name: 'recipe_id' })
  recipe!: Recipe;

  // Extra Column to load the 'recipe_id' in the RecipeIngredient Model without the whole Recipe. Does not affect the DB
  @JoinColumn({ name: 'recipe_id' })
  recipeId!: number;

  @PrimaryColumn({ type: 'bigint', name: 'ingredient_id' })
  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipesIngredient, { nullable: false })
  @JoinColumn({ name: 'ingredient_id' })
  ingredient!: Ingredient;

  // Extra Column to load the 'ingredient_id' in the RecipeIngredient Model without the whole Ingredient. Does not affect the DB
  @JoinColumn({ name: 'ingredient_id' })
  ingredientId!: number;

  @Column({ type: 'bigint', nullable: false })
  quantity!: number;
}
