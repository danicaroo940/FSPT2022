
const root = document.getElementById('root');

const primerDiv = document.createElement('div');
primerDiv.id = 'primerHijo';

const secondDiv = document.createElement('div');
secondDiv.setAttribute('id', 'segundoHijo');

const input = document.createElement('input');
input.setAttribute('id', 'input');

const keyboardNumbers = document.createElement('div');
keyboardNumbers.setAttribute('id', 'keyboardNumbers');

const keyboard = document.createElement('div');
keyboard.setAttribute('id', 'keyboard');

root.appendChild(primerDiv);
root.appendChild(secondDiv);
secondDiv.appendChild(input);
secondDiv.appendChild(keyboardNumbers);
secondDiv.appendChild(keyboard);


async function getPokemon(poke) {

  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    const data = await response.json();
    const img = document.createElement('img');
    img.src = data.sprites.other['official-artwork'].front_default ;
    img.id = 'img';
    primerDiv.appendChild(img);
    const p = document.createElement('p');
    p.id = 'name';
    p.innerHTML = data.name;
    primerDiv.appendChild(p);
    return data;

  } catch (error) {
    const pError = document.createElement('p');
    pError.id = 'pError';
    pError.innerHTML = 'Aprende a escribir';
    secondDiv.appendChild(pError);
    console.error('No se encontro el pokemon');
  }
}

const arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayNumbers.forEach(element => {
  const divNumber = document.createElement('div');
  divNumber.setAttribute('class', 'divNumber');
  keyboardNumbers.appendChild(divNumber);
  divNumber.innerHTML = element;
  divNumber.addEventListener('click', () => {

    document.getElementById(element);
    input.value = input.value + element;

  });
});

const arrayKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'l', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'intro', 'delete', 'pokemon'];


arrayKeys.forEach(element => {
  const keys = document.createElement('div');
  keys.setAttribute('class', 'divKeys');
  keys.id = element;
  keyboard.appendChild(keys);
  keys.innerHTML = element;
  keys.addEventListener('click', () => {

    if(element === 'intro'){
      pokemon(input.value);
      input.value = '';
    }else if(element === 'delete'){
      input.value = input.value.slice(0, -1);
    }else if (element === 'pokemon'){
      input.value = '';
      const img = document.getElementById('img');
      const p = document.getElementById('name');
      primerDiv.removeChild(img);
      primerDiv.removeChild(p);
    }    else {
      document.getElementById(element);
      input.value = input.value + element;
    }
  });
});

async function pokemon(poke) {
  const img = document.getElementById('img');
  const primerDiv = document.getElementById('primerHijo');

  if(img) {
    primerDiv.removeChild(primerDiv.firstChild);
    primerDiv.removeChild(primerDiv.children[0]);
    getPokemon(input.value);
  } else {
    getPokemon(input.value);
  }
}

