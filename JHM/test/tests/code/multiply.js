function multiply(num1, num2) {
  if (num2 === 0) {
    throw new Error('{"status": "8", "message": "Multiply by zero"}')
  }

  return num1 * num2;
}

export default multiply;
// module.exports = multiply;
