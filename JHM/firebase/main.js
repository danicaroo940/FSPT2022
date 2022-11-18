import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyChAXJyhqnTsiNOSfN7DEYV_4xXVxdOlxY',
  authDomain: 'jonhid-99999.firebaseapp.com',
  projectId: 'jonhid-99999',
  storageBucket: 'jonhid-99999.appspot.com',
  messagingSenderId: '670657433905',
  appId: '1:670657433905:web:9b934e7c598b711342e010'
};

async function getAuthorization(app) {
  const auth = getAuth(app);
  const email = 'jonathan@thebridgeschool.es';
  const password = 'jonathan@thebridgeschool.es';
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  // signOut(auth);
  const user = userCredential.user;
  console.log('user', user);
}

async function getDbData(app) {
  const db = getFirestore(app);
  const userDetailsCol = collection(db, 'userDetails');
  const userDetailsData = await getDocs(userDetailsCol);
  const userDetailsList = userDetailsData.docs.map(doc => doc.data());
  console.log('userDetailsList', userDetailsList);
}

async function runFirebase() {
  const app = initializeApp(firebaseConfig);
  getAuthorization(app);
  getDbData(app);
}

runFirebase();
