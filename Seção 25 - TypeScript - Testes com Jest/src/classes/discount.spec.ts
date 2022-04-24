import {
  Discount,
  FiftyPercentDiscount,
  TeenPercentDiscount,
  NoDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should not have discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('Should have 50% discount', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(10.5)).toBeCloseTo(5.25);
  });

  it('Should have 10% discount', () => {
    const sut = createSut(TeenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
