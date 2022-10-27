
const input = document.createElement('input');
let container = document.getElementById('container');
let container2 = document.getElementById('container-2')
input.type = "text";
container.appendChild(input);



function onChangeHandler(e) {

    if(e.keyCode === 13){

        const show = document.createElement('div');
        show.innerHTML = `<p>${e.target.value}</p>`;
        container2.appendChild(show);

        e.target.value = ''

    }
}

input.addEventListener('keypress', onChangeHandler);


