function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  if (num2 === 0) {
    throw new Error('{"status": "8", "message": "Multiply by zero"}')
  }

  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error('{"status": "9", "message": "When divide, the second argument must be different than zero"}')
  }

  return num1 / num2;
}

function exp(num1, num2) {
  return num1 ** num2;
}

export { add, subtract, multiply, divide, exp };
