import * as anotherAPI from './getRandomNumber.js';

async function checkRandomNumber() {
  const random = await anotherAPI.getRandomNumber();
  if (random < 1) {
    const myError = {
      code: 1,
      description: 'Random number cant be lower than 1'
    };

    throw new Error(JSON.stringify(myError));
  } else if (random > 10) {
    const myError = {
      code: 10,
      description: 'Random number cant be greater than 10'
    };

    throw new Error(JSON.stringify(myError));
  }

  return random;
}

export { checkRandomNumber };
