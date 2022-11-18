
let gente = [
    {
    nombre: "Jamiro",
    edad: 45,
    },
    {
    nombre: "Juan",
    edad: 35,
    },
    {
    nombre: "Paco",
    edad: 34,
    },
    {
    nombre: "Pepe",
    edad: 14,
    },
    {
    nombre: "Pilar",
    edad: 24,
    },
    {
    nombre: "Laura",
    edad: 24,
    },
    {
    nombre: "Jenny",
    edad: 10,
    },
    ];

//Crea un array con la gente mayor de 25 años y muéstralo por consola.

//*******************************RESUELTO CON FOR EACH
// let newGente = []
// gente.forEach((element) => {

//     if(element.edad > 25) {
//         newGente.push(element)
//     }
// })
//********************************

//*******************************RESUELTO CON FILTER

// const filtro = (element) => element.edad > 25;

// console.log(gente.filter(filtro));

//*******************************


//***Crea un array con la gente que empieza por J.

//*******************************RESUELTO CON FOR EACH

// let newGente = []
// gente.forEach((element) => {

//     if(element.nombre.includes('J', 0)) {
//         newGente.push(element)
//     }
// })

// console.log(newGente)

//*******************************


//*******************************RESUELTO CON FILTER
//***Crea un array con la gente que empieza por J.

// const filtro = (element) => element.nombre.includes('J', 0);

// console.log(gente.filter(filtro));

//*******************************



//Crea un array con la gente mayor de 25 años y muéstralo por consola.

//*******************************RESUELTO CON MAP

// let newGente = []
// gente.map((element) => {

//     if(element.edad > 25) {
//         newGente.push(element)
//     }
// })

// console.log(newGente)

//***Crea un array con la gente que empieza por J.

// let newGente = []
// gente.map((element) => {

//     if(element.nombre.includes('J', 0)) {
//         newGente.push(element)
//     }
// })

// console.log(newGente)

//Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo

// const numbers = [ 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = numbers.map(element => element ** element);

// console.log(newNumbers);

//Crea un segundo array que devuelva los impares. Con Filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = numbers.filter(number => number % 2 == 1);

// console.log(newNumbers);


// Dado el siguiente array, genera un segundo array que filtre los
//platos veganos y saque una sentencia como la del ejemplo:


// const foodList = [
//     {
//     name: 'Tempeh',
//     isVeggie: true
    
//     },
//     {
//     name: 'Cheesbacon burguer',
//     isVeggie: false
//     },
//     {
//     name: 'Tofu burguer',
//     isVeggie: true
//     },
//     {
//     name: 'Entrecot',
//     isVeggie: false
//     }
//     ];


// foodList.filter(element => element.isVeggie ? console.log(`que rico ${element.name} me voy a comer`) : 'esto no es  vegano');


//REDUCE

//Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

// const numeros = [39, 2, 4, 25, 62];

// const total = (totalValue, currentValue) => totalValue * currentValue;

// const total2 = numeros.reduce(total);

// console.log(total2)


//EXTRAS
//Map

// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del
// objeto proporcionado:

// const staff = [
// {
// name: "Pepe",
// role: "The Boss",
// hobbies: ["leer", "ver pelis"],
// },
// {
// name: "Ana",
// role: "becaria",
// hobbies: ["nadar", "bailar"],
// },
// {
// name: "Luis",
// role: "programador",
// hobbies: ["dormir", "comprar"],
// },
// {

// name: "Carlos",
// role: "secretario",
// hobbies: ["futbol", "queso"],
// },
// ];

// const staff2 = staff.map(element => `${element.name} es ${element.role} y le gusta ${element.hobbies[0]} y ${element.hobbies[1]}`);
// console.log(staff2);

//Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:

// const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];


// const foodList2 = foodList.map((element) => `Como soy de Italia, amo comer ${element}` )

// console.log(foodList2)


//Filter
//Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros

// const inventory = [

// {
// name: 'Mobile phone',
// price: 199
// },
// {
// name: 'TV Samsung',
// price: 459
// },
// {
// name: 'Viaje a cancún',
// price: 600
// },
// {
// name: 'Mascarilla',
// price: 1
// }
// ];

// const expensive = inventory.filter((element) => element.price > 300)
// console.log(expensive.map(element => element.name))


//Reduce. Concatena todos los elementos del array con reduce para que devuelva una sola frase

// const sentenceElements = [
// 'Me',
// 'llamo',
// ,
// 'y',
// 'quiero',
// 'sentir',
// 'la',
// 'fuerza',
// 'con',
// 'javascript'
// ];

// const x = (previousValue, currentValue) => `${previousValue} ${currentValue}`;

// sentenceElements.splice(2, 0, 'Alberto');

// const total = sentenceElements.reduce(x);

// console.log(total);