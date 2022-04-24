import { Menssaging } from './messaging';

const createSut = () => new Menssaging();

describe('Menssaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('test')).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it(`Should call console.log with "Mensagem enviada:", msg`, () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('test');
    expect(consoleSpy).toHaveBeenLastCalledWith('Mensagem enviada:', 'test');
  });
});
