import { Product } from './product';

const createSut = (name: string, price: number) => new Product(name, price);

describe('Produt', () => {
  afterEach(() => jest.clearAllMocks());

  it('Testing creation of product', () => {
    const product = createSut('camiseta', 49.9);

    expect(product.name).toBe('camiseta');
    expect(product.price).toBeCloseTo(49.9);
  });
});
