import { ORDER_TYPE } from './definitions/definitions';
import OrderType from './orderType';

type OrderTypesResume = {
  orderType: ORDER_TYPE;
  allOrders: number;
  successfulOrders: number;
  unSuccessfulOrders: number;
};

class OrderManager {
  private _orderTypes: OrderType[];
  private _activeOrderTypes: ORDER_TYPE[];

  constructor(orderTypes: OrderType[]) {
    this._orderTypes = orderTypes;
    this._activeOrderTypes = orderTypes.map((orderType) => orderType.orderTypeName);
  }

  get activeOrderTypes(): ORDER_TYPE[] {
    return this._activeOrderTypes;
  }

  getOrderTypesResume(): OrderTypesResume[] {
    return this._orderTypes.map((orderType) => ({
      orderType: orderType.orderTypeName,
      allOrders: orderType.getNumberOrders(),
      successfulOrders: orderType.successfulOrders,
      unSuccessfulOrders: orderType.unSuccessfulOrders,
    }));
  }

  addOrder(orderType: ORDER_TYPE, isSuccessful: boolean): void {
    if (!this._activeOrderTypes.includes(orderType)) {
      throw new Error();
    }

    const selectedOrderType = this._orderTypes.find((element) => element.orderTypeName == orderType) as OrderType;

    isSuccessful ? selectedOrderType.addSuccessfulOrder() : selectedOrderType.addUnSuccessfulOrder();

    if (selectedOrderType.successfulOrders === 500) {
      this.deActivateOrderTypesBellowPerformance();
    }
  }

  private deActivateOrderTypesBellowPerformance() {
    const activeOrderTypes = this._orderTypes.filter((element) =>
      this._activeOrderTypes.includes(element.orderTypeName),
    );

    const bellowPerformanceOrderTypesNames = activeOrderTypes
      .filter((activeOrderType) => activeOrderType.successfulOrders <= 450)
      .map((bellowPerformanceOrderType) => bellowPerformanceOrderType.orderTypeName);

    this._activeOrderTypes = this._activeOrderTypes.filter(
      (element) => !bellowPerformanceOrderTypesNames.includes(element),
    );
  }
}

export default OrderManager;
