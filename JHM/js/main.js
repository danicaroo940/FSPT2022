// console.log('ES LO QUE SALE');

// let pokemonName = 'Pikachu'; // string

// let damage = 20; // number

// let isShiny = true; // boolean (true o false)

// let userName; // undefined => no se sabe
// userName = 'Jona; // LOGIN
// userName = null; // null => vacio (LOGOUT)

// const conditionOne = true;
// const userName = 'Germán';


// let index = 0;
// console.log(--index); // index = index - 1
// console.log(--index);
// console.log(--index);
// console.log(index);

// const userName = 'Jona';
// const age = 32;

// if (userName === 'Jona') {
//   console.log('Bienvenido Sr. Hidalgo');
// } else if (userName === 'Germán') {
//   console.log('Bienvenido Sr. Molero');
// } else {
//   console.log('Bienvenido persona random');
// }

// if (age >= 18) {
//   console.log('Es mayor de edad');
// } else {
//   console.log('Es menos de edad');
// }

// switch (userName) {
//   case 'Jona':
//     console.log('Bienvenido Sr. Hidalgo');
//     break;

//   case 'Germán':
//     console.log('Bienvenido Sr. Molero');
//     break;

//   default:
//     console.log('Bienvenido persona random');
//     break;
// }

// EJERCICIO 1: Impares por consola 1 - 20 (solo un console!!!)

// 10 % 3 === 1 --- 10 / 3 = 3.3333333333

const maxLaps = 30;
const divisor = 2;

for (let i = 0; i <= maxLaps; i++) { // 21 laps
  console.log('i=', i);
  const leftover = i % divisor;
  const isOdd = leftover === 1;
  if (isOdd) {
    console.log('-----' + i + ' is odd');
  }
}

// for (let i = 1; i < maxLaps; i+=2) { // i = i+2 === i+=2;
//   console.log('-----' + i + ' is odd');
// }

// EJERCICIO 2: Serie de Fibonacci (no es)
// (0, 1) 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

// const fibonacciMaxLaps = 10;
// let firstOperator = 0;
// let secondOperator = 1;

// console.log(firstOperator);
// console.log(secondOperator);

// for (let i = 0; i <= fibonacciMaxLaps; i++) {
//   const result = firstOperator + secondOperator;
//   console.log(result);
//   firstOperator = secondOperator;
//   secondOperator = result;
// }

// EJERCICIO 3: Calendario Octubre

// const daysOfTheWeek = [
//   'Sabado', // 0
//   'Domingo', // 1
//   'Lunes', // 2
//   'Martes', // 3
//   'Miercoles', // 4
//   'Jueves', // 5
//   'Viernes', // 6
// ]; // 0, 1, 2, 3, 4, 5, 6

// // daysOfTheWeek[1]; // Domingo

// for (let i = 1; i <= 31; i++) {
//   console.log(i); // 1 - 31

//   let daysOfTheWeekAsNumber = i % 7 - 1;
//   if (i % 7 === 0) {
//     daysOfTheWeekAsNumber = 6;
//   // } else {
//   //   daysOfTheWeekAsNumber = i % 7 - 1;
//   }

//   console.log(daysOfTheWeek[daysOfTheWeekAsNumber]); // Lunes - Domingo, undefined
// }

// EJERCICIO 4: Calculadora (funciones) // add, substract, multiply, divide, AC

// function xxx () {

// }

// const username = 'Jona';
// const age = 32;
// const alive = true;
// const add = function(num1, num2) {
//   return num1 + num2;
// };

// const person = {
//   name: username,
//   age,
//   alive,
//   add
// };

// console.log(person);
// console.log(person.add(1, 2));

// const limit = 100;

// for (let i = 0; i < limit; i++) { // 12 => 1, 2, ..., 6
//   const mid = i / 2;
//   for (let j = 0; j < mid; j++) {
//     if (j % limit === 0) {
//       ()
//     }
    
//   }
// }
