import getAsyncHola from './code/async.js';

describe('async describe', () => {
  test('WITH async/await', async () => {
    const getAsyncHolaPromise = getAsyncHola();
    expect(getAsyncHolaPromise).not.toBe('Hola');
    expect(typeof getAsyncHolaPromise).toBe('object');

    const getAsyncHolaResponse = await getAsyncHolaPromise;
    expect(getAsyncHolaResponse).toBe('Hola');
    expect(typeof getAsyncHolaResponse).toBe('string');
  });

  test('WITH .then', () => {
    const getAsyncHolaPromise = getAsyncHola();
    expect(getAsyncHolaPromise).not.toBe('Hola');
    expect(typeof getAsyncHolaPromise).toBe('object');

    getAsyncHolaPromise.then((data) => {
      expect(data).toBe('Hola');
      expect(typeof data).toBe('string');
    });
  });
});
