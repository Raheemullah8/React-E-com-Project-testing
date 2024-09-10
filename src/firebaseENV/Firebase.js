
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC451nhOJCDzpM_SrP1eAOaVKHPHyE7ZP8",
  authDomain: "ecom-d812a.firebaseapp.com",
  projectId: "ecom-d812a",
  storageBucket: "ecom-d812a.appspot.com",
  messagingSenderId: "251987946997",
  appId: "1:251987946997:web:d022ae7f67024c310544bc"
};

const app = initializeApp(firebaseConfig);
const auth =  getAuth(app)
export{
    app,  auth,
 
}