
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAc1ENvWWN-sDCuEIQYyfBHS6jn-GF2YME",
  authDomain: "auth-63d19.firebaseapp.com",
  projectId: "auth-63d19",
  storageBucket: "auth-63d19.appspot.com",
  messagingSenderId: "228168773583",
  appId: "1:228168773583:web:b688e94b8047749c856cba"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);