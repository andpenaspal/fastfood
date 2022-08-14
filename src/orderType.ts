import { ORDER_TYPE } from './definitions/definitions';

class OrderType {
  private orderType: ORDER_TYPE;
  private _successfulOrders: number;
  private _unSuccessfulOrders: number;

  constructor(orderType: ORDER_TYPE) {
    this.orderType = orderType;
    this._successfulOrders = 0;
    this._unSuccessfulOrders = 0;
  }

  get orderTypeName(): ORDER_TYPE {
    return this.orderType;
  }

  get successfulOrders(): number {
    return this._successfulOrders;
  }

  get unSuccessfulOrders(): number {
    return this._unSuccessfulOrders;
  }

  getNumberOrders(): number {
    return this._successfulOrders + this._unSuccessfulOrders;
  }

  addSuccessfulOrder(): number {
    this._successfulOrders += 1;
    return this._successfulOrders;
  }

  addUnSuccessfulOrder(): number {
    this._unSuccessfulOrders += 1;
    return this._unSuccessfulOrders;
  }
}

export default OrderType;
