function onClickHandler(htmlTag) {
  console.log('CLICK!', htmlTag);
}

function onChangeHandler(event) {
  console.log('PRESS! e', event)
  console.log('PRESS! e.target.value', event.target.value)
}

const input = document.createElement('input');
input.setAttribute('type', 'text');
// input.onchange = onChangeHandler;
input.addEventListener('keypress', onChangeHandler);
// input.removeEventListener("change", onChangeHandler);
const container = document.getElementById('container');
container.appendChild(input);
