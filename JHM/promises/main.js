
const age = 10;
function passToDiscoFunction(resolve, reject) {
  setTimeout(() => {
    if (age >= 18) {
      resolve('Entro a la disco');
    } else {
      reject('No entro a la disco');
    }
  }, 1000 * 5);
}

function canIPassToDisco() {
  return new Promise(passToDiscoFunction);
}

// --------------------------------------------------------

// const myPromise = canIPassToDisco();
// myPromise
//   .then((result) => console.info(result))
//   .catch((error) => console.error(error));

// ------------------- BACK -------------------

const secondsToResolve = Math.random() * 10;
const millisecondsInASecond = 1000;
const promiseWorks = true;
const fastestPromiseWorks = true;

function promiseFunction(resolve, reject) {
  setTimeout(
    () => {
      if (promiseWorks) {
        resolve(`La promesa se resuelve tras ${ secondsToResolve } segundos`);
      } else {
        reject(`La promesa se rechaza tras ${ secondsToResolve } segundos`);
      }
    },
    secondsToResolve * millisecondsInASecond
  );
}

function fastestPromiseFunction(resolve, reject) {
  const fastestSecondsToResolve = Math.random() * 10;
  setTimeout(
    () => {
      if (fastestPromiseWorks) {
        resolve(`La promesa se resuelve tras ${ fastestSecondsToResolve } segundos`);
      } else {
        reject(`La promesa se rechaza tras ${ fastestSecondsToResolve } segundos`);
      }
    },
    fastestSecondsToResolve * millisecondsInASecond
  );
}

function getPromise() {
  const myPromise = new Promise(promiseFunction);
  return myPromise;
}

function getFastestPromise() {
  const myPromise = new Promise(fastestPromiseFunction);
  return myPromise;
}

// ------------------- FRONT -------------------

// eslint-disable-next-line no-unused-vars
function executeSimplePromise() {
  const myPromise = getPromise(); // Async query
  myPromise.then((data) => {
  // getPromise().then((data) => {
    console.log('simple promise', data);
  }).catch ((error) => {
    console.error('simple error', error);
  });
}

// eslint-disable-next-line no-unused-vars
function executeRacePromise() {
  // const promises = [];

  const myPromise = getPromise();
  // promises.push(myPromise);

  const fastestPromise = getFastestPromise();
  // promises.push(fastestPromise);

  const promises = [myPromise, fastestPromise];

  // Promise.race([myPromise, fastestPromise]).then((value) => {
  Promise.race(promises).then((value) => {
    console.log('Promise.race', value);
  });
}

// eslint-disable-next-line no-unused-vars
function executeAllPromise() {
  const promises = [];

  const myPromise = getPromise();
  promises.push(myPromise);

  const fastestPromise = getFastestPromise();
  promises.push(fastestPromise);

  const initCrono = new Date().getTime();

  // Promise.all([myPromise, fastestPromise]).then((value) => {
  Promise.all(promises).then((value) => {
    const endCrono = new Date().getTime();
    console.log('crono time', (endCrono - initCrono) / 1000);

    console.log('Promise.all', value);
  }, (error) => {
    const endCrono = new Date().getTime();
    console.error('crono time', (endCrono - initCrono) / 1000);
    console.error('Promise.all error', error);
  });
}

// executeSimplePromise();
// executeRacePromise();
// executeAllPromise();



// fetch('https://pokeapi.co/api/v2/')
//   .then(res => res.json())
//   .then(formattedResponse => console.log(formattedResponse));

// fetch('https://pokeapi.co/api/v2/pokemon/')
//   .then(res => res.json())
//   .then(json => console.log(json));

// fetch('https://pokeapi.co/api/v2/pokemon/1/')
//   .then(res => res.json())
//   .then(json => console.log(json));

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
//   .then(res => res.json())
//   .then(json => console.log(json));

// fetch('https://pokeapi.co/api/v2/pokemon/pikachup/')
//   .then(res => {
//     if (res.ok) {
//       return res.json();
//     }

//     throw new Error('ERROR! This pokemon doesnt exist');
//   })
//   .then(json => console.log(json.name, json))
//   .catch((error) => console.error(error));

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   body: JSON.stringify({
//     name: 'Jona',
//     age: 32,
//     userId: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

async function getPokemonAsync(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`); // 10
  const data = await response.json();
  console.log('async/await', data);
  return data;
}

// getPokemonAsync('arcanine')
//   .then(data => console.log(data))
//   .catch(error => console.log(`hubo un error ${ error }`));

try {
  getPokemonAsync('arcanine');
} catch(error) {
  console.error('Mira este error', error);
}

// other APIs

// fakestoreapi
// dog-api
// randomuser
// jsonplaceholder
// rick and Morty
// pokeapi
// public-apis

