import { CartItem } from '../interfaces/cartitem';
import { Discount } from './discount';
import { ShoppingCart } from './ShoppingCart';

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();

  const cartItem1 = createCartItem('camisa', 10);
  const cartItem2 = createCartItem('chinelo', 5);

  sut.addItem(cartItem1);
  sut.addItem(cartItem2);

  return { sut, discountMock };
};

describe('Shoppingcart', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should be an empty cart when no products is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('Should have 2 cart items', () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);
  });

  it('Should be have 15 in total and in total with discount', () => {
    const { sut } = createSutWithProducts();

    expect(sut.total()).toBe(15);
    expect(sut.totalWithDiscount()).toBe(15);
  });

  it('Should add products and clear cart', () => {
    const { sut } = createSutWithProducts();
    sut.clear();
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('Should remove products', () => {
    const { sut } = createSutWithProducts();
    sut.removeItem(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('Should call discount.calculate once when totalDiscount as been called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call discount.calculate with total pirece when totalWithDiscoutn as been called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
