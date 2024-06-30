import React from 'react'
import "../../styles/Homepage.scss";
import { signOut } from 'firebase/auth'
import { auth } from '../../config/Firebase';
import { useState } from 'react';
import { getDoc } from "firebase/firestore";
import { doc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../config/Firebase';
import { IoLogoYoutube } from "react-icons/io";
import { RiFirebaseFill } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";
import { RiDriveFill } from "react-icons/ri";
import { FcAndroidOs } from "react-icons/fc";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from 'react';

function Homepage({setIsAuth}){


    const userCollection=collection(db, "user");

const [name, setName]=useState("");



    const SignOut= async()=>{
        try{
        await signOut(auth);
        localStorage.clear();
        setIsAuth(false);
        window.pathname.location="Login.jsx";
        }catch(err){
            console.log(err);
        }
    }


  return (
    <div className="homepage">
        <button onClick={SignOut} className="signout">Sign Out</button>
      <div className="google">
        <p className="g">G</p>
        <p className="o">o</p>
        <p className="n">o</p>
        <p className="g">g</p>
        <p className="l">l</p>
        <p className="e">e</p>
      </div>

<div className="userInfo">
    <h1>Work hard. Have fun. Make history. </h1>
<div className="googleservices">
    <div className="icon">
<FaGooglePlay className="play"/>
    </div>
    <div className="icon">
<IoLogoYoutube className="youtube"/>
</div>
<div className="icon">
    <RiFirebaseFill className="firebase"/>
</div>
<div className="icon">
    <RiDriveFill className="drive"/>
</div>
<div className="icon">
  <FcAndroidOs className="android"/>
</div>
<div className="icon">
    <FcGoogle className="ggle"/>
</div>

</div>
</div>
    </div>
  )
}
export default Homepage;
