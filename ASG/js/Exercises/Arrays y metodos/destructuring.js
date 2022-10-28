
  //Extrae la empleada Ana con todos sus datos personales:

// const empleados = [
//     { name: "Luis", email: "Luis@gmail.com" },
//     { name: "Ana", email: "Ana@gmail.com" },
//     { name: "Andrea", email: "Andrea@gmail.com" },
//     ];

// const [, secondItem, ] = empleados;

// console.log(secondItem);


//Extrae el email del empleado Luis
// const [firstItem, , ] = empleados;

// console.log(firstItem.email);


// const pokemon = {
//     name: "Bulbasaur",
//     type: "grass",
//     ability: {
//     "primary": "Overgrow",
//     "hidden": "Chlorophyll"
//     },
//     stats: {
//     hp: 45,
//     attack: 49,
//     deffense: 59,
//     speed: 45
//     },
//     moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"]
//     }

//Cambia el nombre de la propiedad “name” por “nombre

// const {name:userName} = pokemon;

// console.log(userName)

//Extrae el nombre del Pokemon

// const {name} = pokemon;

// console.log(name)

//Extrae el tipo de Pokemon que es

// const {type} = pokemon;

// console.log(type)

//Extrae el movimiento “Tackle”

// const {moves} = pokemon;

// const [, second, , ] = moves;

// console.log(second);

//Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

// const pikachu = {
// name: "Pikachu",
// type: "electric",
// ability: {
// "primary": "Static",
// "hidden": "Lightning rod"
// },
// stats: {
// hp: 35,
// attack: 55,
// deffense: 40,
// speed: 90
// },
// moves: [
// "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
// ],
// }

// const newPoke = { ...pikachu, ...pokemon};

// console.log(newPoke);

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los
//demás argumentos.

// const sumEveryOther = (...numbers) => {
//   const x = numbers.reduce((total, initial) => total + initial);
//   console.log(x)
// }

// sumEveryOther(11, 3, 12)

//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y
//retorne la suma solo de los números.

// const addOnlyNums = (...words) => {

//   const result = words.filter(number => typeof number === 'number');

//   const x = result.reduce((total, initial) => total + initial);
//   console.log(x)

// }

// addOnlyNums(1, 'perro', 2, 4)

//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que
//indique cuántos argumentos ha recibido.


// const countTheArgs = (...args) => {
//   const map2 = args.map(element => element.lenght);
//   console.log(map2.length)
// }

// countTheArgs(1, 2, 3, 4, 54444444, 6)

//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los
//dos (usando spread operator).


// const combineTwoArrays = (array1, array2) => {
//   const newArray = [...array1, ...array2]
//   console.log(newArray)
// }

// combineTwoArrays([1, 2, 3, 4],['hola', 'adios'])


// Cambiar las siguientes líneas para guardar desestructurando los valores de temperaturas en las
//variables maximaHoy y maximaManana

// const HIGH_TEMPERATURES = {
//   yesterday: 30,
//   today: 35,
//   tomorrow: 32,
//   };


// const {today:maximaHoy, tomorrow:maximaManana} = HIGH_TEMPERATURES

// console.log(maximaHoy)
// console.log(maximaManana)


// Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos,
// sin repetidos.

// const onlyUniques = (...arg) => {
//   const filtro = arg.filter((item, index) => {
//     return arg.indexOf(item) === index;
//   });
//   console.log(filtro)
// }

// onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');



// Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine
// todos en un solo array.

// const combineAllArrays = (...array1) => {
//   const x = array1.flat();
//   console.log(x);
// };

// combineAllArrays([1, 2, 3, 4],['hola', 'adios']);



// Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y
// devuelva la suma de todos los valores cuadrados.

// const sumAndSquare = (...arg) => {
//   const cuadrado = arg.map(element => element ** 2);
//   const sum = cuadrado.reduce((previousValue, currentValue) => previousValue + currentValue);
//   console.log(sum);
// };

// sumAndSquare(1, 2, 3, 4);