// function saludar() {
//     return "Hola";
//     }
saludar=() => "Hola";
    
    console.log(saludar)

    // function division(a,b) {
    //     return a / b;
    // }

division = (a,b) => a/b;
    console.log(division(9,9));

    // function miNombre(nombre) {
    //     return `Mi nombre es ${nombre}`;
    //     }

miNombre = nombre => `Mi nombre es ${edu}`
console.log(miNombre);

// function test2() {
//     console.log("Función test 2 ejecutada.");
//     }
test2 = () => console.log('Función test 2 ejecutada.')

// function test1(callback) {
//     callback();
//     }
test1 = callback => callback();

// ==============FOREACH==================
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
     
    for (let i = 0; i < gente.length; i++) {
    if (gente[i].edad >25){
    console.log(gente[i].nombre);
    }
    }
    gente.forEach(personOver25 => {
        if(personOver25.edad > 25){
            console.log(personOver25.nombre)
        }
        
    });
    for (let i = 0; i < gente.length; i++) {
        if (gente[i].nombre.startsWith('J')){
        console.log(gente[i].nombre);
        }
        }
    gente.forEach(personas => {
        if (personas.nombre.startsWith('J')){
    console.log( personas.nombre);
        }
    });

// =======//MAP//======

    const personasMayores25 = gente.map(function(over25){
    if(over25.edad > 25){
        return over25.nombre; 
    }
    });

    console.log(personasMayores25);
   const nameStartWithJ = gente.map(function(withJ){
    if(withJ.nombre.startsWith('J')){
        return withJ.nombre;
    }
   });
   console.log(nameStartWithJ);

   const numbers = [4,5,6,7,8,9,10];
   const eB = numbers.map (elevatebase => Math.pow ([elevatebase],[elevatebase]))
   console.log(eB)
//    ====FILTER=====
const numbers2 = [1,2,3,4,5,6,7,8,9,10];
const oddNumbers = numbers2.filter(odd => odd % 2 ===1);
console.log(oddNumbers);

const foodList = [
{
name: 'Tempeh',
isVeggie: true
},
   { name: 'Cheesbacon burguer',
    isVeggie: false
},
{
name: 'Tofu burguer',
isVeggie: true
},
{
name: 'Entrecot',
isVeggie: false
}
]
// 'Que rico Tempeh me voy a comer!',
// 'Que rica Tofu burguer me voy a comer!'
const veggie = foodList.filter (function(vegan){
    if(vegan.isVeggie === true && vegan.name === 'Tempeh')
    {
    console.log( `Que rico ${vegan.name} me voy a comer!`);
    // console.log( `Que rica ${vegan.name} me voy a comer!`)
    }
    if(vegan.isVeggie === true && vegan.name === 'Tofu burguer')
    {
    console.log( `Que rica ${vegan.name} me voy a comer!`);
    }
    });
    // =======REDUCE====

    const numbers3 = [39, 2, 4, 25, 62];
    const multiplyeachother = numbers3.reduce((acc,el)=> acc * el,1);
    console.log(multiplyeachother);

    // =====EXTRAS====

// ==MAP==

// Dado el siguiente array, crear un segundo array que forme
// frases como en el ejemplo accediendo a las propiedades del
// objeto proporcionado:

const staff = [
{
name: "Pepe",
role: "The Boss",
hobbies: ["leer", "ver pelis"],
},
{
name: "Ana",
role: "becaria",
hobbies: ["nadar", "bailar"],
},
{
name: "Luis",
role: "programador",
hobbies: ["dormir", "comprar"],
},
{

name: "Carlos",
role: "secretario",
hobbies: ["futbol", "queso"],
},
];
const sentence = staff.map(x =>`${x.name} es ${x.role} y le gusta ${x.hobbies}`);
console.log (sentence);
// Resultado esperado
/*
[
'Pepe es TheBoss y le gusta leer y ver pelis',
'Ana es becaria y le gusta nadar y bailar',
'Luis es programador y le gusta dormir y comprar',
'Ana es becaria y le gusta nadar y bailar',
'Carlos es secretario y le gusta fútbol y queso'
]
*/
// EJRCICIO 2

// Dado el siguiente array, generar un segundo array que consiga
// generar de salida el resultado esperado:

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];

const result = foodList2.map((element) => {
    // console.log(phrase)
  if(element === 'Pizza'){
    console.log(`Como soy de Italia, amo comer ${element}`);
  }
  else if (element === 'Ramen'){
    console.log(`Como soy de Japón, amo comer ${element}`);
  }
  else if (element === 'Paella'){
    console.log(`Como soy de Valencia, amo comer ${element}`);
  }
  else if (element === 'Entrecot'){
    console.log(`Aunque no como carne, el ${element} es sabroso`)
  }
});

// //Resultado esperado
// 'Como soy de Italia, amo comer Pizza',
// 'Como soy de Japón, amo comer Ramen',
// 'Como soy de Valencia, amo comer Paella',
// 'Aunque no como carne, el Entrecot es sabroso'

// #ejercicio filter 

// ○ Dado el siguiente array, devolver un array con los nombres
// de los elementos que valgan más de 300 euros.
const inventory = [{
  names: 'Mobile phone', 
  price: 199 
},  
    {
    names: 'TV Samsung', 
    price: 459 
    }, 
    { 
    names: 'Viaje a cancún', 
    price: 600 
    }, 
    { 
    names: 'Mascarilla', 
    price: 1 
    } 
    ];

const over300 = inventory.filter(element  => element.price > 300);
console.log(over300.map(element => element.names));

// *
// RESULTADO:    // [ 
    // 'TV Samsung,', 
    // 'Viaje a Cancún' 
    // ] 
// */

// ● Reduce 
// ○ Concatena todos los elementos del array con reduce para que devuelva una sola frase 
const sentenceElements = [ 
    'Me', 
    'llamo', 
    'y', 
    'quiero', 
    'sentir', 
    'la', 
    'fuerza', 
    'con', 
    'javascript' 
    ];
   const x = 'Edu'
    sentenceElements.splice(2,0,`${x}`);
    const suma = sentenceElements.reduce(function (resultado, elemento) {
    
        return resultado +' ' + elemento;
      });
      console.log(suma);