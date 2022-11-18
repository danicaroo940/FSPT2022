// ----- SETTERS -----

// --- localStorage ---

localStorage.setItem('localStorageName', 'Jona'); // op1
console.log('localStorage.setItem(name, Jona)');

localStorage.localStorageSurname = 'Hidalgo'; // op2
console.log('localStorage.surname = Hidalgo');

// --- sessionStorage ---

sessionStorage.setItem('sessionStorageName', 'Jona'); // op1
console.log('sessionStorage.setItem(name, Jona)');

sessionStorage.sessionStorageSurname = 'Hidalgo'; // op2
console.log('sessionStorage.surname = Hidalgo');



// ----- DELETE -----

// --- localStorage ---

// delete a property
// localStorage.removeItem('localStorageSurname');

// delete all
// localStorage.clear();

// --- sessionStorage ---

// delete a property
// sessionStorage.removeItem('sessionStorageSurname');

// delete all
// sessionStorage.clear();



// ----- GETTERS -----

// --- localStorage ---

console.log(localStorage.getItem('localStorageName')); // op1

console.log(localStorage.localStorageSurname); // op2

// --- sessionStorage ---

console.log(sessionStorage.getItem('sessionStorageName')); // op1

console.log(sessionStorage.sessionStorageSurname); // op2



// ----- JSON methods-----

const teacher = {
  name: 'Jona',
  surname: 'Hidalgo'
}; // !== '{"name":"Jona","surname":"Hidalgo"}'

// 1 !== '1';

console.log('teacher', teacher);
const teacherToSetAsString = JSON.stringify(teacher);

console.log('teacherToSetAsString', teacherToSetAsString);
localStorage.setItem('teacher', teacherToSetAsString);

const gettedTeacherAsString = localStorage.getItem('teacher');
console.log('gettedTeacherAsString', gettedTeacherAsString);

const finalTeacher = JSON.parse(gettedTeacherAsString);
console.log('finalTeacher', finalTeacher);



// ----- Object methods-----
const myTeacher = {
  name: 'Jona',
  surname: 'Hidalgo',
  hobbies: ['tv', 'leer', 'pokemon', 'programar'],
  matrix: [
    ['jdt', 'got talent', 'los simpson'],
    ['endv', 'etduhs', 'usdl'],
    ['html', 'css', 'js']
  ],
  familiares: {
    madre: 'Mar',
    padre: 'Paco',
    hermano: 'Cristian',
    hermana: 'Davinia Begoña'
  }
};

const entries = Object.entries(myTeacher);
console.log('entries', entries);

const keys = Object.keys(myTeacher);
console.log('keys', keys);

const values = Object.values(myTeacher);
console.log('values', values);

const characterName = { firstName: 'Philip', lastName: 'Fry', id: 1 };
const characterDetails = { job: 'Delivery Boy', employer: 'Planet Express', id: 2 };

// Merge the objects
const mergedCharacter = Object.assign(characterName, characterDetails);
console.log('with Object.assign', mergedCharacter);
console.log('with spread', { ...characterName, ...characterDetails });



const edu = { firstName: 'Edu', lastName: 'Gonzalez', id: 1 };
const fry = { firstName: 'Philip', lastName: 'Fry', id: 2 };

// const both = {
//   edu: { firstName: 'Edu', lastName: 'Gonzalez', id: 1 },
//   fry: { firstName: 'Philip', lastName: 'Fry', id: 2 }
// };

// const both = { edu: edu, fry: fry };

const both = { edu, fry };

// WIN: CTRL + ALT + L, MAC: CTRL + OPT + L
console.log('🚀 ~ file: main.js ~ line 127 ~ both', both);
