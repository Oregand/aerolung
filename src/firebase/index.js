import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC2xosWYdlIOaj4MweDBfDwGtE-R5QYzZw',
  authDomain: 'aerolung-bf793.firebaseapp.com',
  projectId: 'aerolung-bf793',
  storageBucket: 'aerolung-bf793.appspot.com',
  messagingSenderId: '437840888821',
  appId: '1:437840888821:web:4c4f1309802b6b0cfbd6bc',
  measurementId: 'G-3XKJSWQX67',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
