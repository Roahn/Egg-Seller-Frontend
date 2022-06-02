import React from 'react'
// import { getAuth, signOut } from "firebase/auth";
import {Link} from 'react-router-dom';
import '../Home.css'
import Nav from './Nav';
export default function Home(props) {
  const profile = props.title;
  const numberOfEggs =0;
  
  //  const auth = getAuth();
  // const signOut = ()=>{
  //     //console.log('SignOUT')
  //     auth.signOut();
  // }
 
 

  return (
    <>
      <Nav Info={profile}></Nav>
      {/* <button onClick={signOut}>Sign OUT</button> */}
      <h1>Egg Seller</h1>
      <div className='container'>
        <Link to='/data'>Form Data</Link>
      </div>
      <br></br>
      <h4 id='Buy'>
        <Link to='/Buy'>
          Buy Eggs
        </Link>{' '}
      </h4>
    </>
  );
}


