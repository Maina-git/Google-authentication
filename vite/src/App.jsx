import React from 'react'
import Login from './pages/login/Login';
import { useState } from 'react';
import Homepage from './pages/homepage/Homepage';

function App() {

const [isAuth, setIsAuth]=useState(false);
if(!isAuth){
return (  
    <div>
    <Login setIsAuth={setIsAuth}/>
    </div>
)
 }

 return (
  <div>
    <Homepage setIsAuth={setIsAuth}/>
  </div>
 )
}

export default App;
