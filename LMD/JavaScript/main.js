// Ejercicio 1

// const stop = 20;

// for (let i = 1 ; i <= stop; i+=2){
//     console.log("Numero impar: " + i);
// }

// Ejercicio 2

// const laps = 10;
// let numOne = 0;
// let numTwo = 1;

// for (let i = 0; i < laps; i++) {
//   let add = numOne + numTwo;
//   console.log(add);
//   numOne = numTwo;
//   numTwo = add;
// }


// Ejercicio 3 - DIAS DE LA SEMANA OCTUBRE

// const daysOfTheWeeks = ['Sabado','Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

// for (let i = 1; i <= 31 ; i++) {
//   console.log(i);

//   let numberDays;
//   if (i % 7 === 0) {
//     numberDays = 6;
//   } else{
//     numberDays = i % 7 - 1;
//   }
//   console.log(daysOfTheWeeks[numberDays]); 
// } 

// o

// const daysWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo',];

// let weekStartIndex = 5;

// for (let i = 1; i < 31; i++) {
//   console.log(daysWeek[weekStartIndex], i);
//   weekStartIndex++
//   if (weekStartIndex > 6) {
//     weekStartIndex = 0;
//   }
// }

// EJERCICIO 4 - Calculadora (funcionas) add,substract, multiply, divide, Ac

function add(numOne, numTwo) {
  return numOne + numTwo;
}
const result = add(3, 4);
console.log(result);


function substract(numOne, numTwo) {
  return numOne - numTwo;
}
const result2 = substract(5, 4)
console.log(result2);


function multiply(numOne, numTwo) {
  return numOne * numTwo;
}
const result3 = multiply(8, 4)
console.log(result3);


function divide(numOne, numTwo) {
  return numOne / numTwo;
}
const result4 = divide(10, 2)
console.log(result4);

function ac() {
  return 0;
}
const result5 = ac();
console.log(result5);