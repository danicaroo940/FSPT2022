function onKeyPress(e){
  if(e.keyCode === 13){
    document.createElement('div');
  }
}


const input = document.createElement('input');
input.setAttribute('type', 'textarea');
input.addEventListener('keypress', onKeyPress);
const container = document.getElementById('container');
container.appendChild(input);

