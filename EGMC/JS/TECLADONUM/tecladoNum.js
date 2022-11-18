const divContenedor = document.getElementById('divContenedor');
const arrayBoton = [1,2,3,4,5,6,7,8,9,0];
const inputcontenedor = document.getElementById('input');

arrayBoton.forEach(function esc (element,i) {
  const crearBoton = document.createElement('button');
  console.log(element,i);
  // divContenedor;
  // crearBoton;
  crearBoton.id= 'boton'+ (i+1);
  divContenedor.appendChild(crearBoton);
  crearBoton.innerHTML = element;
  crearBoton.addEventListener('click', () => {

    // document.getElementById(element);
    inputcontenedor.value = inputcontenedor.value + element;
  });
});



// function escribirInput (){
//   const getInput = document.getElementById('input');
//   getInput.value= 1;
// }
// boton1.addEventListener('click', escribirInput);