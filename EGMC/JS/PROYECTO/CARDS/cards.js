//   LEFT SIDE //
const theDiv = document.getElementById('root');
const DivLeft = document.createElement('form');
const divRight = document.createElement('div');
const formTag = document.createElement('form');
document.body.appendChild(formTag);
// nombre//
const textarea = document.createElement('input');
textarea.setAttribute('type', 'text');
textarea.setAttribute('id', 'funkoName');
textarea.setAttribute('class', 'funko-name');
textarea.setAttribute('placeholder', 'Escriba su nombre');
// textarea.required = 'true';
// edad//
const ageArea = document.createElement('input');
ageArea.setAttribute('type', 'number');
ageArea.setAttribute('value', '');
ageArea.setAttribute('id', 'funkoAge');
ageArea.setAttribute('class', 'funko-age');
ageArea.setAttribute('placeholder', 'Edad');
ageArea.required = 'true';
// imagenes//=======
const carrousel = document.createElement('div');
// textarea //
const bigTextarea = document.createElement('input');
bigTextarea.setAttribute('type', 'textarea');
bigTextarea.setAttribute('id', 'funkoText');
bigTextarea.setAttribute('class', 'funko-text');
bigTextarea.setAttribute('placeholder', 'Escriba  datos sobre el personaje...');
// bigTextarea.required = 'true';
// BOTON//
const button = document.createElement('input');
button.setAttribute('type', 'submit');
button.setAttribute('id', 'button');
button.setAttribute('class', 'funko-button');
button.setAttribute('value', 'Crea tu tarjeta');




// const getDivLeft = document.getElementById('mainLeft');


// MAIN-LEFT (2 inputs (nombre,edad) + 1 div  (imagen contenedor carrousel)+ 1 input(text area)  //===========
theDiv.appendChild(DivLeft);

DivLeft.id = 'mainLeft';
DivLeft.classList = 'main-left';
// inputs//
// name input //
DivLeft.appendChild(textarea);
// age input //
DivLeft.appendChild(ageArea);
// div de carrousel //
DivLeft.appendChild(carrousel);
carrousel.id = 'carrousel';
carrousel.classList = 'carrousel-class';
// text area //
DivLeft.appendChild(bigTextarea);
// boton //
DivLeft.appendChild(button);
button.addEventListener('click',
console.log("🚀 ~ file: cards.js ~ line 63 ~ button", button));



// MAIN-RIGHT//===========

theDiv.appendChild(divRight);
divRight.id ='mainRight';
divRight.classList = 'main-right';


