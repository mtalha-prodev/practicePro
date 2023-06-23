// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBDWtKXLvkm2I_FOyQucHJHyRL0BSNMWks',
  authDomain: 'test-auth-0018.firebaseapp.com',
  projectId: 'test-auth-0018',
  storageBucket: 'test-auth-0018.appspot.com',
  messagingSenderId: '722490735784',
  appId: '1:722490735784:web:7ab85af20ab00d7a47d69d',
  measurementId: 'G-N5WB1SHZJ5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
