import React from 'react'
import { getAuth, signOut } from 'firebase/auth';
import '../nav.css'
import { authentication } from '../Firebase/firebase';

var user = authentication.currentUser;


  
export default function Nav  (props) {

     const auth = getAuth();
     const signOut = () => {
       //console.log('SignOUT')
       auth.signOut();
     };
  const { displayName, email, photoURL } = props.Info;
  return (
    <>
      <ul className='navbar'>
        <li>Home</li>
        <li>Services</li>
        <li>Templates</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <button onClick={signOut}>Sign OUT</button>
        </li>
      </ul>

      <img id='UserPhoto' src={photoURL} alt={'Profile Photo'}></img>
      <div id='EmailNameBox'>
        <h4 id='UserName'>{displayName}</h4>
        <h4 id='UserEmail'>{email}</h4>
      </div>

      
    </>
  );
}

