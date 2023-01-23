import { checkRandomNumber } from "./code/checkRandomNumber.js";
import * as numberApi from "./code/getRandomNumber.js";

function manualBeforeEach(number) {
  numberApi.getRandomNumber = jest.fn().mockImplementation(() => number)
}

describe('d1', () => {
  test('t1', () => {
    manualBeforeEach(0);
    try {
      checkRandomNumber()
    } catch (e) {
      const parseMsg = JSON.parse(e.message);
      console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAA');
      expect(parseMsg.code).toBe(1);
      expect(parseMsg.description).toBe('Random number cant be lower than 1');
    }
  });
});