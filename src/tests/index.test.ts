import DataBuilder from '../utils/stockBuilder';

describe('Basic test', () => {
  it('should pass', () => {
    const check = DataBuilder.buildRestaurants();
    console.dir(check, { depth: null });
  });
});
