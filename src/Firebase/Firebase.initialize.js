import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseAuth = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseAuth;