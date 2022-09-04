import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

let auth ;


const firebaseConfig = {
  apiKey: "AIzaSyA5OHMDHcOqjTXLv0AIor6gSxrP7pCRpgY" , 
  authDomain: "dashboard-4b944.firebaseapp.com",
  projectId: "dashboard-4b944",
  storageBucket: "dashboard-4b944.appspot.com",
  messagingSenderId: "751738267243",
  appId: "1:751738267243:web:9612b0caa008969d25b32e"
};




const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default auth=getAuth(); 
