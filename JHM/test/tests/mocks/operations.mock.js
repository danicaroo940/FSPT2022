function addMock(num1, num2) {
  return num1 + num2;
}

function subtractMock(num1, num2) {
  return num1 - num2;
}

function multiplyMock(num1, num2) {
  if (num2 === 0) {
    throw new Error('{"status": "8", "message": "Multiply by zero"}')
  }

  return num1 * num2;
}

function divideMock(num1, num2) {
  if (num2 === 0) {
    throw new Error('{"status": "9", "message": "When divide, the second argument must be different than zero"}')
  }

  return num1 / num2;
}

function expMock(num1, num2) {
  return num1 ** num2;
}

export { addMock, subtractMock, multiplyMock, divideMock, expMock };
