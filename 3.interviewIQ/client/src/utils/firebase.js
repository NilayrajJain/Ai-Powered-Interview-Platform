
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "ai-interview-91e7e.firebaseapp.com",
  projectId: "ai-interview-91e7e",
  storageBucket: "ai-interview-91e7e.firebasestorage.app",
  messagingSenderId: "380621431292",
  appId: "1:380621431292:web:60b7e2b9336d35e49c5279"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}