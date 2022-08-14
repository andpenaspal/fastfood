import Ingredient from '../ingredient';

class InventoryItem extends Ingredient {
  private minStock: number;
  private maxStock: number;
  private _usedStock: number;
  private _reFilledStock: number;

  constructor(name: string, minStock: number, maxStock: number) {
    super(name, maxStock);
    this.minStock = minStock;
    this.maxStock = maxStock;
    this._usedStock = 0;
    this._reFilledStock = 0;
  }

  get reFilledStock() {
    return this._reFilledStock;
  }

  get usedStock(): number {
    return this._usedStock;
  }

  public useIngredient(quantity: number): number {
    this._quantity -= quantity;
    this._usedStock += quantity;

    if (!this.hasEnoughStock()) {
      this._reFilledStock += this.reFillStock();
    }

    return this.quantity;
  }

  private hasEnoughStock(): boolean {
    return this.quantity >= this.minStock;
  }

  private reFillStock(): number {
    const reFillingQuantity = this.maxStock - this.quantity;
    this._quantity += reFillingQuantity;

    return reFillingQuantity;
  }
}

export default InventoryItem;
