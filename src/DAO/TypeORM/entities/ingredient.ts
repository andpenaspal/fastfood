import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { RecipeIngredient } from './recipeIngredient';
import { Restaurant } from './restaurant';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'ingredient_id' })
  ingredientId!: number;

  @Column({ type: 'varchar', name: 'ingredient_name', nullable: false, comment: 'Name of the ingredient' })
  ingredientName!: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.inventoryIngredients, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant!: Restaurant;

  @OneToMany(() => RecipeIngredient, (recipeIngredient) => recipeIngredient.ingredient, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  recipesIngredient!: RecipeIngredient[];

  @Column({
    type: 'bigint',
    name: 'stock',
    nullable: false,
    default: 0,
    comment: 'Quantity of Stock the Restaurant has of an Ingredient',
  })
  stock!: number;

  @Column({
    type: 'bigint',
    name: 'max_stock',
    nullable: false,
    comment: 'Maximum quantity of Stock the Restaurant can have of an Ingredient',
  })
  maxStock!: number;

  @Column({
    type: 'bigint',
    name: 'min_stock',
    nullable: false,
    comment: 'Minimum quantity of Stock the Restaurant can have of an Ingredient',
  })
  minStock!: number;

  @Column({
    type: 'bigint',
    name: 're_filled_stock',
    nullable: false,
    default: 0,
    comment: 'Quantity of Stock the Restaurant has refilled of an Ingredient',
  })
  reFilledStock!: number;
}
