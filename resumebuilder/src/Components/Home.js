import React from 'react'
// import { getAuth, signOut } from "firebase/auth";

import Nav from './Nav';
export default function Home(props) {
  const profile = props.title;
  
  //  const auth = getAuth();
  // const signOut = ()=>{
  //     //console.log('SignOUT')
  //     auth.signOut();
  // }
 
 

  return (
    <>
     
     
      <Nav Info ={profile}></Nav>
          {/* <button onClick={signOut}>Sign OUT</button> */}
  </>
  );
}


