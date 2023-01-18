import calc from './code/calc.js';
import * as operations from './code/operations.js';
import * as operationsMock from './mocks/operations.mock.js';

beforeAll(() => {
  operations.add = jest.fn().mockImplementation(operationsMock.addMock);
  operations.subtract = jest.fn().mockImplementation(operationsMock.subtractMock);
  operations.multiply = jest.fn().mockImplementation(operationsMock.multiplyMock);
  operations.divide = jest.fn().mockImplementation(operationsMock.divideMock);
  operations.exp = jest.fn().mockImplementation(operationsMock.expMock);
});
beforeEach(() => {});
afterEach(() => {});
afterAll(() => {});

describe.skip('common', () => {
  test('Without symbol', () => {
    try {
      calc(4, 2);
    } catch(e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.status).toBe('7');
      expect(parsedMsg.message).toBe('The third argument must be a valid symbol');
    }
  });

  test('Integer + Integer < 0', () => {
    try {
      calc(4, -2, '+');
    } catch(e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.status).toBe('5');
      expect(parsedMsg.message).toBe('The second argument must be a positive number');
    }
  });

  test('Integer < 0 + Integer', () => {
    try {
      calc(-4, 2, '+');
    } catch(e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.status).toBe('2');
      expect(parsedMsg.message).toBe('The first argument must be a positive number');
    }
  });

  test('Integer < 0 + Integer < 0', () => {
    try {
      calc(-4, -2, '+');
    } catch(e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.status).toBe('2');
      expect(parsedMsg.message).toBe('The first argument must be a positive number');
    }
  });

  test('Empty + Integer', () => {
    try {
      calc('', 2, '+');
    } catch(e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.status).toBe('1');
      expect(parsedMsg.message).toBe('The first argument must be a number');
    }
  });

  test('Integer + Empty', () => {
    try {
      calc(2, '', '+');
    } catch(e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.status).toBe('4');
      expect(parsedMsg.message).toBe('The second argument must be a number');
    }
  });

  test('Decimal / Integer', () => {
    try {
      calc(0.5, 2, '/');
    } catch(e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.status).toBe('3');
      expect(parsedMsg.message).toBe('The first argument must be a integer number');
    }
  });

  test('Integer / Decimal', () => {
    try {
      calc(2, 0.5, '/');
    } catch(e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.status).toBe('6');
      expect(parsedMsg.message).toBe('The second argument must be a integer number');
    }
  });
});

describe.skip('add', () => {
  test('Integer + Integer', () => {
    const result = calc(4, 2, '+');
    expect(result).toBe(6);
  });
});

describe.skip('subtract', () => {
  test('Integer > Integer', () => {
    const result = calc(4, 2, '-');
    expect(result).toBe(2);
  });

  test('Integer < Integer', () => {
    const result = calc(2, 4, '-');
    expect(result).toBe(-2);
  });
});

describe.skip('multiply', () => {
  test('Integer * Integer', () => {
    const result = calc(1, 2, '*');
    expect(result).toBe(2);
  });

  test('Integer * 0', () => {
    try {
      calc(5, 0, '*');
    } catch(e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.status).toBe('8');
      expect(parsedMsg.message).toBe('Multiply by zero');
    }
  });
});

describe.skip('divide', () => {
  test('Integer lower than Integer', () => {
    const result = calc(1, 2, '/');
    expect(result).toBe(0.5);
  });

  test('Integer / Zero', () => {
    try {
      calc(2, 0, '/');
    } catch(e) {
      const parsedMsg = JSON.parse(e.message);
      expect(parsedMsg.status).toBe('9');
      expect(parsedMsg.message).toBe('When divide, the second argument must be different than zero');
    }
  });

  test('Zero / Integer', () => {
    const result = calc(0, 10, '/');
    expect(result).toBe(0);
  });
});

describe.skip('exp', () => {
  test('Integer ^ Integer', () => {
    const result = calc(2, 2, '^');
    expect(result).toBe(4);
  });

  test('Integer ** Integer', () => {
    const result = calc(2, 2, '**');
    expect(result).toBe(4);
  });
});
