import React from 'react'
import { FcGoogle } from "react-icons/fc";
import "../../styles/Login.scss";
import {signInWithPopup} from "firebase/auth";
import { auth } from '../../config/Firebase';
import { provider } from '../../config/Firebase';
import { db } from '../../config/Firebase';
import { addDoc, collection } from 'firebase/firestore';


function Login({setIsAuth}){
const Login= async ()=>{
const userCollection=collection(db, "user");
 try{
await signInWithPopup(auth, provider);
localStorage.setItem("isAuth", true);
setIsAuth(true);
addDoc(userCollection, {name:auth.currentUser.displayName});
}catch(err){
        console.log(err);
    }
}
  return (
    <div className="login">
    <h1>Sign in with Google To continue</h1>
    <button onClick={Login}> <FcGoogle/> Sign in With Google</button>
    </div>
  )
}
export default Login;
