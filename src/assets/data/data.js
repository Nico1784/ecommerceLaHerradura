
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHs4SfuH1ByIV4thFKJFaIludcVli9A_Q",
  authDomain: "ecommorce-laherradura.firebaseapp.com",
  projectId: "ecommorce-laherradura",
  storageBucket: "ecommorce-laherradura.firebasestorage.app",
  messagingSenderId: "815343648772",
  appId: "1:815343648772:web:6690ba316b9e193d963551"
};

initializeApp(firebaseConfig);


const db= getFirestore()

export default db;

