import { ORDER_TYPE } from '../definitions/definitions';
import FastFoodManager from '../fastFoodManager';
import { OrderManagerComplex } from '../orderManager';
import OrderType from '../orderType';

describe('Basic test', () => {
  it('Check it works', () => {
    new FastFoodManager().run();
  });

  it('Deactivates order as expected', () => {
    const orderTypes = [new OrderType(ORDER_TYPE.A), new OrderType(ORDER_TYPE.B)];
    const orderManager = new OrderManagerComplex(orderTypes);

    const originalOrderTypes = orderManager.orderTypesName;

    const orderTypeToDeactivate = orderManager.orderTypesName[0];
    const orderTypeToRun = orderManager.orderTypesName[1];

    for (let i = 0; i < 300; i++) {
      orderManager.addOrder(orderTypeToDeactivate, true);
    }

    for (let i = 0; i < 500; i++) {
      orderManager.addOrder(orderTypeToRun, true);
    }
    console.dir(orderManager.getOrderTypesResume(), { depth: null });

    expect(originalOrderTypes).toHaveLength(2);
    expect(orderManager.orderTypesName).toHaveLength(1);
  });
});
