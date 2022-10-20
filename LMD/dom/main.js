function onKeyPress(e, pId, inputId) {
  if (e.keyCode === 13) {
    const p = document.createElement('p');
    p.id = pId;
    p.innerHTML = e.target.value;
    const messageOne = document.getElementById('messages');
    messageOne.appendChild(p);
    document.getElementById(inputId).value = "";
  }
}

function keyPressHandler(e) {
  let pId;
  if (e.target.id === 'inputId') {
    pId = 'message';

  } else {
    pId = 'message2';
  }
  onKeyPress(e, pId, e.target.id);
}

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.id = 'inputId';
input.addEventListener('keypress', keyPressHandler);
const container = document.getElementById('container');
container.appendChild(input);

const input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.id = 'inputId2';
input2.addEventListener('keypress', keyPressHandler);
const container2 = document.getElementById('container');
container2.appendChild(input2); 