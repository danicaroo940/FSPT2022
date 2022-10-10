// numeric methods

const PI = 3.14159265359;

PI.toExponential(4); // '3.1416e+0'
PI.toFixed(4); // '3.1416'
PI.toLocaleString('es-ES'); // '3,142'
PI.toPrecision(4); // '3.141'
PI.toString(); // '3.14159265359'

// parseInt('4'); // 4
// parseFloat('4.25') // 4.25

// string methods

// array methods

const numbers = ['1', '2', '3', '4'];
const unordererNumbers = [2, 4, 3, 1];

function order(next, prev) {
  if (next > prev) return 1;
  if (next === prev) return 0;
  if (next < prev) return -1;
}

function isGreaterThanTwo(number) {
  return number > 2;
}

function summatory(accumulated, number) {
  return accumulated + number;
}

numbers.at(1); // 2
numbers.pop(); // [1, 2, 3]
numbers.push(5); // [1, 2, 3, 4, 5]
numbers.shift(); // [2, 3, 4]
numbers.unshift(1); // [1, 1, 2, 3, 4]
numbers.fill(1); // [1, 1, 1, 1]
numbers.join('-'); // '1-2-3-4'
numbers.reverse(); // [4, 3, 2, 1]
numbers.includes(2); // true
numbers.map(function(num) { return num * 2; }); // [2, 4, 6, 8]
numbers.map(function(num) {
   return num * 2;
}); // [2, 4, 6, 8]
numbers.some(isGreaterThanTwo); // true
numbers.find(isGreaterThanTwo); // 3
numbers.every(isGreaterThanTwo); // false
numbers.filter(isGreaterThanTwo); // [3, 4]
numbers.findIndex(isGreaterThanTwo); // 2
numbers.reduce(summatory); // 10
unordererNumbers.sort(order); // 1, 2, 3, 4
