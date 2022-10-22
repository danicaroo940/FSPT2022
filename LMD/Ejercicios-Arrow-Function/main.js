// 1-Funciones Flecha

() => 'Hola';

(a, b) => a / b;

(nombre) => `Mi nombre es ${nombre}`;

() => console.log('Funcion test 2 ejecutada.');

(callback) => callback();


// 2-ForEach

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

const array = [];

function olderThan25(gente) {
  gente.forEach(person => {
    if (person.edad >= 25) {
      array.push(person);
    }
  });
}
olderThan25(gente);
console.log(array);


console.log('--------------------------------------');
const arrays = [];
function names(gente) {
  gente.forEach(person => {
    if (person.nombre.includes('J')) {
      arrays.push(person);
    }
  })
}
names(gente);
console.log(arrays);

console.log('--------------------------------------');

// -------------------------------------------------------------------------------------------

//map

function olderMap(gente) {
  const olderMap = gente.map((person) => {
    if (person.edad >= 25) {
      let map = person;
      return map;
    }
  })
  return olderMap;
}
console.log(olderMap(gente));


function nombres(gente) {
  const filtro = gente.map((e) => {
    if (e.nombre.includes('J')) {
      let arraynom = e;
      return arraynom;
    }
  })
  return filtro;
}

console.log(nombres(gente));

console.log('--------------------------------------');

// ----------------------------------------------------------------------------------------
//filter
