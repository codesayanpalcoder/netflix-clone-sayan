import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy9oeSPdlRBJUzfBwfsbiqKGS1LGgzuYw",
  authDomain: "netflix-clone-27eb5.firebaseapp.com",
  projectId: "netflix-clone-27eb5",
  storageBucket: "netflix-clone-27eb5.appspot.com",
  messagingSenderId: "822673612005",
  appId: "1:822673612005:web:94c66790f2898acb54c80c",
  measurementId: "G-P8ETF3WHC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);