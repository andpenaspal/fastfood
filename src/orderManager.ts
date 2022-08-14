import { ORDER_TYPE } from './definitions/definitions';
import OrderType from './orderType';

type OrderTypesResume = {
  orderType: ORDER_TYPE;
  deactivated?: boolean;
  allOrders: number;
  successfulOrders: number;
  unSuccessfulOrders: number;
};

class OrderManager {
  protected _orderTypes: OrderType[];

  constructor(orderTypes: OrderType[]) {
    this._orderTypes = orderTypes;
  }

  get orderTypesName(): ORDER_TYPE[] {
    return this._orderTypes.map((orderType) => orderType.orderTypeName);
  }

  getOrderTypesResume(): OrderTypesResume[] {
    return this._orderTypes.map((orderType) => this.getOrderTypeResume(orderType));
  }

  addOrder(orderType: ORDER_TYPE, isSuccessful: boolean): void {
    if (!this.orderTypesName.includes(orderType)) {
      throw new Error();
    }

    const selectedOrderType = this._orderTypes.find((element) => element.orderTypeName == orderType) as OrderType;

    isSuccessful ? selectedOrderType.addSuccessfulOrder() : selectedOrderType.addUnSuccessfulOrder();
  }

  protected getOrderTypeResume(orderType: OrderType) {
    return {
      orderType: orderType.orderTypeName,
      allOrders: orderType.getNumberOrders(),
      successfulOrders: orderType.successfulOrders,
      unSuccessfulOrders: orderType.unSuccessfulOrders,
    };
  }
}

export class OrderManagerComplex extends OrderManager {
  private deactivatedOrderTypes: OrderType[];

  constructor(orderTypes: OrderType[]) {
    super(orderTypes);
    this.deactivatedOrderTypes = [];
  }

  public addOrder(orderType: ORDER_TYPE, isSuccessful: boolean): void {
    super.addOrder(orderType, isSuccessful);

    const selectedOrderType = this._orderTypes.find((element) => element.orderTypeName == orderType) as OrderType;

    if (selectedOrderType.successfulOrders === 500) {
      this.deActivateOrderTypesBellowPerformance();
    }
  }

  private deActivateOrderTypesBellowPerformance() {
    const activeOrderTypes = this._orderTypes.filter((element) => this.orderTypesName.includes(element.orderTypeName));

    const bellowPerformanceOrderTypes = activeOrderTypes.filter(
      (activeOrderType) => activeOrderType.successfulOrders <= 450,
    );

    this.deactivatedOrderTypes.push(...bellowPerformanceOrderTypes);
    this._orderTypes = this._orderTypes.filter((element) => !bellowPerformanceOrderTypes.includes(element));
  }

  getOrderTypesResume(): OrderTypesResume[] {
    const resume = super.getOrderTypesResume();

    const deactivatedResumes = this.deactivatedOrderTypes.map((deactivatedOrderType) => ({
      ...super.getOrderTypeResume(deactivatedOrderType),
      deactivated: true,
    }));

    return resume.concat(deactivatedResumes);
  }
}

export default OrderManager;
