// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVaYhxk28v4iXWLBCom1GEwXIRbo5doPU",
  authDomain: "regalia-productimages.firebaseapp.com",
  projectId: "regalia-productimages",
  storageBucket: "regalia-productimages.appspot.com",
  messagingSenderId: "938163664096",
  appId: "1:938163664096:web:6cceee37880a942c80cc85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig,'Regalia');
export const storage = getStorage(app);


