import * as operations from './operations.js';

function calc(num1, num2, symbol) {
  if (typeof num1 !== 'number') {
    throw new Error('{"status": "1", "message": "The first argument must be a number"}')
  } else if (num1 < 0) {
    throw new Error('{"status": "2", "message": "The first argument must be a positive number"}')
  } else if (num1 % 1 !== 0) {
    throw new Error('{"status": "3", "message": "The first argument must be a integer number"}')
  }

  if (typeof num2 !== 'number') {
    throw new Error('{"status": "4", "message": "The second argument must be a number"}')
  } else if (num2 < 0) {
    throw new Error('{"status": "5", "message": "The second argument must be a positive number"}')
  } else if (num2 % 1 !== 0) {
    throw new Error('{"status": "6", "message": "The second argument must be a integer number"}')
  }

  switch (symbol) {
    case '+':
      return operations.add(num1, num2);
    case '-':
      return operations.subtract(num1, num2);
    case '*':
      return operations.multiply(num1, num2);
    case '**':
      return operations.exp(num1, num2);
    case '^':
      return operations.exp(num1, num2);
    case '/':
      try {
        return operations.divide(num1, num2);
      } catch (e) {
        throw new Error(e.message)
      }
    default:
      throw new Error('{"status": "7", "message": "The third argument must be a valid symbol"}')
  }
}

export default calc;
