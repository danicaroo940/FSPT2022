async function getRandomNumber() {
  const excludedMinLimit = 0;
  const excludedMaxLimit = 11;
  return Math.floor(Math.random() * (excludedMaxLimit - excludedMinLimit) + excludedMinLimit);
  // return Math.floor(Math.random() * maxLimit) + 1;
}

export { getRandomNumber };
