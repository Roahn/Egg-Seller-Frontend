import React from 'react'
import { getAuth, signOut } from "firebase/auth";
export default function Home() {
   const auth = getAuth();
  const signOut = ()=>{
      //console.log('SignOUT')
      auth.signOut();
  }
 

  return (
    <>
      <div>Home</div>
      <button onClick={signOut}>Sign OUT</button>
    </>
  );
}


