function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error('{"status": "9", "message": "When divide, the second argument must be different than zero"}')
  }

  return num1 / num2;
}

export default divide;
// module.exports = divide;
