// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4ClMMEHbWPCYjMjVwgj754shQfajkkQM",
  authDomain: "cade-a-van.firebaseapp.com",
  projectId: "cade-a-van",
  storageBucket: "cade-a-van.appspot.com",
  messagingSenderId: "66928150791",
  appId: "1:66928150791:android:8f57537f1fbf8cd3b75da2"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };