// ---------- Arrow functions ----------
console.log('---------- Arrow functions ----------');
const numbers = [1, 2, 3, 4];

function gt2(num) {
  return num > 2;
}

const filteredNumbers1 = numbers.filter(gt2);
console.log('filteredNumbers1', filteredNumbers1);

const filteredNumbers2 = numbers.filter(function (num) { return num > 2; });
console.log('filteredNumbers2', filteredNumbers2);

const filteredNumbers3 = numbers.filter((num) => { return num > 2; });
console.log('filteredNumbers3', filteredNumbers3);

const filteredNumbers4 = numbers.filter((num) => num > 2);
console.log('filteredNumbers4', filteredNumbers4);

const filteredNumbers5 = numbers.filter(num => num > 2);
console.log('filteredNumbers5', filteredNumbers5);

// ---------- Destructuring ----------
console.log('---------- Destructuring ----------');

const destructuringNumbers = [1, 2, 3];
// const firstItem = destructuringNumbers[0];
// const thirdItem = destructuringNumbers[2];
const [firstItem, , thirdItem] = destructuringNumbers;
console.log('firstItem', firstItem);
console.log('thirdItem', thirdItem);

const teacher = {
  age: 32,
  name: 'Jona',
  isAdult: true,
  description: 'xxxxxxxx'
};

// const username = teacher.name;
const { name: username, age, description = 'yyyyy', desc = 'yyyyy' } = teacher;
console.log('username', username);
console.log('age', age);
console.log('description', description);
console.log('desc', desc);

// ---------- Spread ----------
console.log('---------- Spread ----------');

const spreadNumbersOne = [1, 2, 3];
const spreadNumbersTwo = [4, 5, 6];
const spreadNumbersTotal = [...spreadNumbersOne, ...spreadNumbersTwo];
console.log('spreadNumbersTotal', spreadNumbersTotal);

const teacherToSpread = {
  name: 'Jona',
  age: 32,
  isAdult: true,
  description: 'xxxxxxxx'
};

const teacherWithSpread = {
  notSpreadedProp: 'notSpreadedProp',
 ...teacherToSpread
};

console.log('teacherWithSpread', teacherWithSpread);

// ---------- Rest ----------
console.log('---------- Rest ----------');
const numbersToRest = [1, 2, 3];
const [firstNumber, ...restArray] = numbersToRest;
console.log('firstNumber', firstNumber);
console.log('restArray', restArray);

const teacherToRest = {
  name: 'Jona',
  age: 32,
  isAdult: true,
  description: 'xxxxxxxx'
};

const { isAdult, ...restObject } = teacherToRest;
console.log('isAdult', isAdult);
console.log('restObject', restObject);

// ---------- Ternario ----------
console.log('---------- Ternario ----------');

const myAge = 32;
const adultAge = 18;
const amIAdult = myAge >= adultAge;
if (amIAdult) {
  console.log('Im adult! 1');
} else {
  console.log('Im a baby! 1');
}

amIAdult ? console.log('Im adult! 2') : console.log('Im a baby! 2');

const message = amIAdult ? 'Im adult! 3' : 'Im a baby! 3';
console.log(message);

// ---------- Optional params ----------
console.log('---------- Optional params ----------');

function add(num1, num2, num3 = 0) {
  return num1 + num2 + num3;
}

console.log('add(1, 2)', add(1, 2));
console.log('add(1, 2, 0)', add(1, 2, 0));
console.log('add(1, 2, 3)', add(1, 2, 3));

// ---------- Advanced loops ----------
console.log('---------- Advanced loops ----------');
const advancedArray = [1, 2, 3, 4, 5];
// for
console.log('----- for -----');

for (let i = 0; i < advancedArray.length; i++) {
  console.log(advancedArray[i]);
}

// forEach
console.log('----- forEach -----');
// function muFunction(value, index) {
//   console.log(value, index);
// }
// advancedArray.forEach(muFunction);
advancedArray.forEach((value, index) => { console.log(value, index); });

// forIn
console.log('----- forIn -----');
for (const i in advancedArray) {
  console.log(advancedArray[i]);
}

// forOf
console.log('----- forOf -----');
for (const value of advancedArray) {
  console.log(value);
}

// while
console.log('----- while -----');
let counter = 0;
while (counter < advancedArray.length) {
  console.log(advancedArray[counter]);
  counter++;
}

// doWhile
console.log('----- doWhile -----');
let doWhileCounter = 0;
do {
  console.log(advancedArray[doWhileCounter]);
  doWhileCounter++;
} while (doWhileCounter < advancedArray.length);
