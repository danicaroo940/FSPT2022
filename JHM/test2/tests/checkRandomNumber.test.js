import * as numberRandom from './code/checkRandomNumber.js';
import * as numberApi from './code/getRandomNumber.js';

beforeEach(()=>{
  numberApi.getRandomNumber = jest.fn()
  .mockImplementationOnce(() => 0)
  .mockImplementationOnce(() => 11)
})
describe('testing exclude numbers', () => {
  test('testing <1',() => {
    try{
      numberRandom.checkRandomNumber();
    }catch(e){
      expect (JSON.parse(e.message).code).toBe(1);
      expect (JSON.parse(e.message).message).toBe('Random number cant be lower than 1');
    }
  });
  test('testing >10',()=>{
    try{
      numberRandom.checkRandomNumber();
    }catch(e){
      expect(JSON.parse(e.message).code).toBe(10);
      expect(JSON.parse(e.message).message).toBe('Random number cant be greater than 10')
    }
  });
});