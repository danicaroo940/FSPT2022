

const textarea = document.createElement('input');
textarea.setAttribute('type', 'text');
textarea.setAttribute('id', 'message');
// textarea.setAttribute('onKeyUp', chat);
textarea.setAttribute('placeholder', 'empieza el chat contigo mismos');
const addTextArea= document.querySelector('.addTextArea');
addTextArea.appendChild(textarea);


// se puede sacar por consola el id en un consolelog()
// no me queda claro cuanod poner le e de evento en la funcion
// }
function test(){
textarea.removeAttribute('placeholder')
console.log('funciona!');
}
// function(){
//     console.log('funciona')
// const keyCode = keyCode || which
function chat(e){
// oojo CON EL EVENTOOOOOOO QUE APRECE EN EL CONSOLE.LOG
console.log('inicio funcion', e.keyCode, e);
if(e.keyCode === 13) {
    const valor = document.getElementById('message').value;
    // console.log(valor);
    const div = document.createElement('div');
    div.id ='box';
    div.innerHTML =  valor;
    const addTextAreaElements = document.getElementsByClassName('addTextArea');
    const addTextAreaElement = addTextAreaElements[0];
    addTextAreaElement.appendChild(div);
    document.getElementById('message').value= null;
    // message.parentElement.appendChild(div)

    // const data = document.getElementById('message').data;
    // div.innerHTML = 'hola puto' + data;
}

}
message.addEventListener('click', test);
message.addEventListener('keyup', chat);
// console.log('presionaste enter')