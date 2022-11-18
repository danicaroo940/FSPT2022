const divroot = document.getElementById('root');
const main = document.createElement('main');
const aside = document.createElement('aside');
// el main es el contenedor de la izquierda desde ahi creamos los siguientes div anidados TODO DESDE JS//
divroot.appendChild(main);
main.id='leftPart';

const containerLeft = document.getElementById('leftPart');
const createTopLeft = document.createElement('div');

createTopLeft.id= 'topLeftId';
createTopLeft.classList ='div-with-top';
containerLeft.appendChild(createTopLeft);

const divForCircle = document.getElementById('topLeftId');
const createDivForCircle = document.createElement('div');

createDivForCircle.id ='blueCircle';
createDivForCircle.classList ='blue-circle-class';
divForCircle.appendChild(createDivForCircle);

// three smalls circles
const divForRedCircle = document.createElement('div');
divForRedCircle.classList ='red-circle-class';
divForCircle.appendChild(divForRedCircle);

const divForGreenCircle = document.createElement('div');
divForGreenCircle.classList ='green-circle-class';
divForCircle.appendChild(divForGreenCircle);

const divForYellowCircle = document.createElement('div');
divForYellowCircle.classList ='yellow-circle-class';
divForCircle.appendChild(divForYellowCircle);

// screen side//
const myscreencontainer = document.createElement('div');
myscreencontainer.id= 'myScreenContainerId';
myscreencontainer.classList ='my-screen-container-class';
containerLeft.appendChild(myscreencontainer);

const myscreen = document.createElement('div');
myscreen.id= 'myscreenId';
myscreen.classList ='my-screen-class';
myscreencontainer.appendChild(myscreen);

// el div de arriba es el div que va a llevar el pokemon 'jonaMon'
// el aside es el contenderor de la izquierda...//

divroot.appendChild(aside);
aside.id ='rightPart';

const containerRight = document.getElementById('rightPart');
const createTopRight = document.createElement('div');

createTopRight.id= 'screenRightId';
createTopRight.classList ='div-with-top-right';
containerRight.appendChild(createTopRight);

const pokecontainer = document.createElement('div');
pokecontainer.id ='3divsContainer';
pokecontainer.classList ='container';
containerRight.appendChild(pokecontainer);


const input = document.createElement('input');
input.id= 'myInputId';

// input.value ='';
input.classList ='my-input-class';
// input.disabled = true
pokecontainer.appendChild(input);

const divRight = document.createElement('div');
divRight.id ='keyBoardNumbers';
divRight.classList ='key-numbers-class';
pokecontainer.appendChild(divRight);
// crear bucle para iterar las teclas //;
const keyNumber = [0,1,2,3,4,5,6,7,8,9];
for (let index = 0; index < keyNumber.length; index++) {
  const number = document.createElement('div');
  number.id ='n' + (index + 1);
  number.classList='n';
  number.innerHTML = keyNumber[index];
  divRight.appendChild(number);
}
// const getInput = document.getElementById('myInputId');
// function typeInInput(){
//   getInput;
  
//   myInputId.appendChild(valueOfN);
// }
// n1.addEventListener('click',typeInInput);

const divRight2 = document.createElement('div');
divRight2.id ='keyBoard';

divRight2.classList ='key-board-class';
pokecontainer.appendChild(divRight2);


const keyBoards = 'qwertyuiopasdfghjklzxcvbnm.➡️'.split('');
for (let index = 0; index < 28;index++) {
  const keys = document.createElement('div');
  keys.classList='key-class';
  keys.id ='key' + (index + 1);
  keys.innerHTML = keyBoards[index];
  divRight2.appendChild(keys);

  // if (keys === '➡') {key28.addEventListener('click',apiCallerFunction)};

  // else if (id=key27){
  // // crear funcion de borrar //
  // }
  // else keys.addEventListener('click',printvalue);

}
 // function printvalue() {
  // return getInput.value += keys;
 // }
const idScreen = document.getElementById('myscreenId');
const apiCaller = document.getElementById('key28');

// createImage.src = JSON.stringify(data.);
function createFunctionImage(obj) {
  console.log(obj.id)
  const imagestring = obj.sprites.front_default;
  const getIdScreen = document.getElementById('myscreenId');
  let childElement = getIdScreen.firstElementChild;
  while(childElement != undefined){
    getIdScreen.removeChild(childElement);
    childElement = getIdScreen.firstElementChild;
  }
  const createImage = document.createElement('img');
  createImage.id = 'imgPokemonId';
  getIdScreen.appendChild(createImage);
  createImage.src = imagestring;
}

function apiCallerFunction(e) {
  if(e.keyCode === 13) {
    const getInput = document.getElementById('myInputId');
    const urlString = `https://pokeapi.co/api/v2/pokemon/${getInput.value}`;
    fetch(urlString)
      .then(res => res.json())
      .then(data => createFunctionImage(data))
      .catch(error => console.log(error));
  }
}
function apiCallerFunction2() {
  const getInput = document.getElementById('myInputId');
  const urlString = `https://pokeapi.co/api/v2/pokemon/${getInput.value}`;
  // const urlString = `https://pokeapi.co/api/v2/pokemon/charmander`;//

  fetch(urlString)
    .then(res => res.json())
    .then(data => createFunctionImage(data))
    .catch(error => console.log(error));
}
addEventListener('keyup',apiCallerFunction);


// async function getPokemonImage {
//   try {
//     const dataFetched = await   fetch('https://pokeapi.co/api/v2/pokemon/charmander')

//   } catch {
//     console.log('error')
//   }
// }
// // crear una funcion que tenga un bucle por cada letras hasta la key 27, ahi hacer un bucle de addevents... quizas
key28.addEventListener('click', apiCallerFunction2);

