import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';

async function getDbData(app) {
  const db = getFirestore(app); // obtenermos la BD
  const userDetailsCol = collection(db, 'userDetails'); // obtenemos collection
  const userDetailsData = await getDocs(userDetailsCol); // obtenemos conjuntos de docs
  const userDetailsList = userDetailsData.docs.map(doc => doc.data()); // map con .data()
  console.log('userDetailsList', userDetailsList);
}

function runFirebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyChAXJyhqnTsiNOSfN7DEYV_4xXVxdOlxY',
    authDomain: 'jonhid-99999.firebaseapp.com',
    projectId: 'jonhid-99999',
    storageBucket: 'jonhid-99999.appspot.com',
    messagingSenderId: '670657433905',
    appId: '1:670657433905:web:9b934e7c598b711342e010'
  };

  const app = initializeApp(firebaseConfig);
  // getAuthorization(app);
  getDbData(app);
}

runFirebase();
