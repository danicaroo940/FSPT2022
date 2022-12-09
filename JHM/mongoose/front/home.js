// eslint-disable-next-line no-unused-vars
function exit(e) {
  sessionStorage.removeItem('token');
  window.location.pathname = './login.html';
}

async function getCharacters(token) {
  const response = await fetch('http://localhost:3000/characters/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });

  return await response.json();
}

function printHeaders(table, headers) {
  const tr = document.createElement('tr');
  for (const header of headers) {  // [ name, age, race, color ]
    const th = document.createElement('th');
    th.innerText = header;
    tr.appendChild(th);
  }

  table.appendChild(tr);
  return table;
}

function appendTdButton(tr, text, callback, character) {
  const button = document.createElement('button');
  const td = document.createElement('td');
  button.innerText = text;
  button.addEventListener('click', () => callback(character));
  // button.addEventListener('click', suma); // f(num1, num2) => num1 + num2
  // button.addEventListener('click', suma(2, 3)); // 5
  td.appendChild(button);
  tr.appendChild(td);
}

async function updateCharacter(character) {
  const response = await fetch(`http://localhost:3000/characters/${character._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.token
    },
    body: JSON.stringify(character)
  });

  return await updateCharacterResponse.json();
}

async function deleteCharacter(character) {
  const deleteCharacterResponse = await fetch(`http://localhost:3000/characters/${character._id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.token
    }
  });

  console.log(deleteCharacterResponse);
}

function printCharacterRow(table, character, headers) {
  const tr = document.createElement('tr');

  for (const header of headers) { // [ name, age, race, color ]
    const td = document.createElement('td');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = character[header]; // { race: human, color: blue, name: Jona, age: 32 }
    // input.value = character['name'];
    // input.value = character.name;
    input.setAttribute('disabled', 'true');
    td.appendChild(input);
    tr.appendChild(td);
  }

  appendTdButton(tr, 'Edit', updateCharacter, character);
  appendTdButton(tr, 'Remove', deleteCharacter, character);
  table.appendChild(tr);
  return table;
}

async function createCharacter(headers) {
  const character = {};
  for (const header of headers) {
    const input = document.getElementById(header);
    character[header] = input.value;
  }

  const createCharacterResponse = await fetch('http://localhost:3000/characters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.token
    },
    body: JSON.stringify(character)
  });

}

function printCreateRow(table, headers) { // [ name, age, race, color, _id ]
  const tr = document.createElement('tr');
  for (const header of headers) {
    const td = document.createElement('td');
    const input = document.createElement('input');
    input.id = header;
    td.appendChild(input);
    tr.appendChild(td);
  }
  
  const tdCreate = document.createElement('td');
  const buttonCreate = document.createElement('button');
  buttonCreate.innerText = 'Crear';
  tdCreate.appendChild(buttonCreate);
  tr.appendChild(tdCreate);
  buttonCreate.addEventListener('click', () => createCharacter(headers));

  table.appendChild(tr);
}

function printCharacters(characters) {
  const charactersPanel = document.getElementById('charactersPanel');
  let table = document.createElement('table');
  // [ name, age, race, color, _id ]
  const originalHeaders = Object.keys(characters[0])
  const headers = originalHeaders.filter((header) => header !== '_id');
  // [ name, age, race, color ]

  table = printHeaders(table, headers);
  for (const character of characters) {
    table = printCharacterRow(table, character, headers);
  }

  printCreateRow(table, headers);

  charactersPanel.appendChild(table);
}

async function showCharacters() {
  const characters = await getCharacters(sessionStorage.token);
  printCharacters(characters);
}

showCharacters();
