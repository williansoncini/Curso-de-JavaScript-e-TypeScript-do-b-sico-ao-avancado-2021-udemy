import { CartItem } from '../interfaces/cartitem';
import { CustomerOrder } from '../interfaces/customerProtocol';
import { MenssagingProtocol } from '../interfaces/menssagingProtocol';
import { PersistencyProtocol } from '../interfaces/persistencyProtocol';
import { ShoppingCartProtocol } from '../interfaces/shoppingCartProtocol';
import { Order } from './order';

class ShoppingCartMock implements ShoppingCartProtocol {
  addItem(): void {}
  removeItem(): void {}
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 1;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {}
  get items(): Readonly<CartItem[]> {
    return [];
  }
}

class MenssagingMock implements MenssagingProtocol {
  sendMessage(): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder() {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    return '';
  }
  getIDN(): string {
    return '';
  }
}

const createSut = () => {
  const shoppinCartMock = new ShoppingCartMock();
  const menssagingMock = new MenssagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();

  const sut = new Order(
    shoppinCartMock,
    menssagingMock,
    persistencyMock,
    customerMock,
  );

  return {
    sut,
    shoppinCartMock,
    menssagingMock,
    persistencyMock,
    customerMock,
  };
};

describe('Order', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should not checkout if cart is empty', () => {
    const { sut, shoppinCartMock } = createSut();
    const shoppinhCartMockSpy = jest
      .spyOn(shoppinCartMock, 'isEmpty')
      .mockReturnValue(true);
    sut.checkout();
    expect(shoppinhCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('Should checkout if cart is not empty', () => {
    const { sut, shoppinCartMock } = createSut();
    const shoppinhCartMockSpy = jest
      .spyOn(shoppinCartMock, 'isEmpty')
      .mockReturnValue(false);
    sut.checkout();
    expect(shoppinhCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('Should save order', () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
    sut.checkout();
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should clear cart', () => {
    const { sut, shoppinCartMock } = createSut();
    const shoppinCartMockSpy = jest.spyOn(shoppinCartMock, 'clear');
    sut.checkout();
    expect(shoppinCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
