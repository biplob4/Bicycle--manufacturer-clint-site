// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK_X8VuqBjoAObX_BV10aabdD_RLTcoSs",
  authDomain: "bicycle-parts-center.firebaseapp.com",
  projectId: "bicycle-parts-center",
  storageBucket: "bicycle-parts-center.appspot.com",
  messagingSenderId: "819827503522",
  appId: "1:819827503522:web:23facfaa4ac1eba73782fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;