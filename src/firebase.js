import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDDBYTpAS1Lp_OnwcHltND2maD01G1S-_Y",
  authDomain: "first-95de7.firebaseapp.com",
  projectId: "first-95de7",
  storageBucket: "first-95de7.appspot.com",
  messagingSenderId: "33200859514",
  appId: "1:33200859514:web:c52db4988f9aaaa7468ec3",
  measurementId: "G-XQBBNPL06K"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{app, auth}