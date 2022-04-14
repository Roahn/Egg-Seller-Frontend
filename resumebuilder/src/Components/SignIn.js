import React from 'react'
import {authentication} from '../Firebase/firebase'
import {signInWithPopup , GoogleAuthProvider} from 'firebase/auth';
import '../GB.css'
var userInfo =55;
const SignIn=()=> {
  const SignInWithFirebase = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication,provider)
    .then((re)=> {
      //console.log(userInfo);
        var userInfo = re;
        //console.log(re.user.displayName
        //console.log(re)
    })
    .catch((err)=> {
      console.log(err)
    })
  }


  return (
    <>
      {/* <button onClick={SignInWithFirebase}>Sign In With Google</button>
       */}
      <div className="decore">
       
      </div>
      <div className="LogoName">

      </div>
      <ul className='navbar'>
        <li>Home</li>
        <li>Services</li>
        <li>Templates</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <button onClick={SignInWithFirebase}>
           Login
          </button>
        </li>
      </ul>
    </>
  );
}

export default SignIn;
