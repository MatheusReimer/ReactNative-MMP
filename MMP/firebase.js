import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCslj50Diiy4DUFM7FN22AwlScMcLlB0PM",
  authDomain: "fir-mmp-auth.firebaseapp.com",
  projectId: "fir-mmp-auth",
  storageBucket: "fir-mmp-auth.appspot.com",
  messagingSenderId: "541720504319",
  appId: "1:541720504319:web:6bcb37950ccbe3523129ca"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth}
