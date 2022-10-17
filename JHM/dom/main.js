// ---------- Obtención de elementos ----------
const myElement = document.getElementById('myId');
console.log('getElementById(myId)', myElement);

const pElements= document.getElementsByTagName('p');
console.log('getElementsByTagName(p)', pElements);

const superElements= document.getElementsByClassName('super');
console.log('getElementsByClassName(super)', superElements);

const notSuperElements= document.getElementsByClassName('notSuper');
console.log('getElementsByClassName(notSuper)', notSuperElements);

const queryElement = document.querySelector('p.super');
// solo el primer elemento que encuentre
console.log('querySelector(p.super-class)', queryElement);

const allElements = document.querySelectorAll('p.super');
// todos los elementos que encuentre
console.log(allElements);

// ---------- Modificación de elementos ----------
const emptyDiv = document.getElementById('emptyDiv');

// emptyDiv.innerHTML = 'Escribo en el div vacio';
emptyDiv.innerHTML = '<h1>Escribo en el div vacio</h1>';

emptyDiv.id = 'changedDiv';

emptyDiv.style.color = 'blue'; // NO HACER

// emptyDiv.accesskey = 'modifiedAccesskey';
// emptyDiv.setAttribute('accesskey', 'modifiedAccesskey');
emptyDiv.setAttribute('class', 'myClass');
// emptyDiv.setAttribute('class', 'myClass');
// emptyDiv.setAttribute('class', 'myClass');

// ---------- Creación/eliminación de elementos ----------
const nestedDiv = document.createElement('div');
const nestedP = document.createElement('p');
nestedDiv.appendChild(nestedP);
emptyDiv.appendChild(nestedDiv);

// emptyDiv.classList.add('newClass');

const firstDiv = document.createElement('div');
firstDiv.id = 'firstDiv';
emptyDiv.insertBefore(firstDiv, nestedDiv);

const replacedP = document.createElement('p');
replacedP.id = 'replacedP';
// emptyDiv.replaceChild(replacedP, firstDiv);
firstDiv.parentElement.replaceChild(replacedP, firstDiv);

emptyDiv.removeChild(replacedP);

// ---------- Formularios ----------

function manageMinMax() {
  const myInput = document.forms['myFormName']['myInputName'];
  const min = myInput.getAttribute('min');
  const max = myInput.getAttribute('max');

  const message = document.getElementById('message');
  if (message) {
    document.forms['myFormName'].removeChild(message);
  }

  if (parseInt(myInput.value) < parseInt(min)) {
    myInput.value = min;
    const p = document.createElement('p');
    p.id = 'message';
    p.innerHTML = 'El número mínimo es ' + min;
    // p.innerHTML = `El número mínimo es ${min}`;
    document.forms['myFormName'].appendChild(p);
  }

  if (parseInt(myInput.value) > parseInt(max)) {
    myInput.value = max;
    const p = document.createElement('p');
    p.id = 'message';
    p.innerHTML = 'El número máximo es ' + max;
    document.forms['myFormName'].appendChild(p);
  }
}

document.forms['myFormName']['myInputName'].addEventListener("change", manageMinMax);
