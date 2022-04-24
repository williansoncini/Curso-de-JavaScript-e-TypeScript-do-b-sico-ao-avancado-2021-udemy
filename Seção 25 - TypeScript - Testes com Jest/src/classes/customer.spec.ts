import { IndividualCustomer, EntrerpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => new IndividualCustomer(firstName, lastName, cpf);

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EntrerpriseCustomer => new EntrerpriseCustomer(name, cnpj);

describe('Individual Customer', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer(
      'Albert',
      'Einstein',
      '000.000.000.00',
    );

    expect(sut).toHaveProperty('firstName');
    expect(sut).toHaveProperty('lastName');
    expect(sut).toHaveProperty('cpf');
  });

  it('Should have firstName, lastName, cpf with values', () => {
    const sut = createIndividualCustomer(
      'Albert',
      'Einstein',
      '000.000.000.00',
    );

    expect(sut.firstName).toBe('Albert');
    expect(sut.lastName).toBe('Einstein');
    expect(sut.cpf).toBe('000.000.000.00');
  });

  it('Should have get name and idn', () => {
    const sut = createIndividualCustomer(
      'Albert',
      'Einstein',
      '000.000.000.00',
    );

    expect(sut.getName()).toBe('Albert Einstein');
    expect(sut.getIDN()).toBe('000.000.000.00');
  });
});

describe('Enterprise Customer', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should have name and cnpj', () => {
    const sut = createEnterpriseCustomer(
      'Albert Einstein LTDA',
      '00.000.000/0000-00',
    );

    expect(sut).toHaveProperty('name');
    expect(sut).toHaveProperty('cnpj');
  });

  it('Should have name and cnpj with values', () => {
    const sut = createEnterpriseCustomer(
      'Albert Einstein LTDA',
      '00.000.000/0000-00',
    );

    expect(sut.name).toBe('Albert Einstein LTDA');
    expect(sut.cnpj).toBe('00.000.000/0000-00');
  });

  it('Should have get name and idn', () => {
    const sut = createEnterpriseCustomer(
      'Albert Einstein LTDA',
      '00.000.000/0000-00',
    );

    expect(sut.getName()).toBe('Albert Einstein LTDA');
    expect(sut.getIDN()).toBe('00.000.000/0000-00');
  });
});
