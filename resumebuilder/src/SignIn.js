import React from 'react'
import {authentication} from './Firebase/firebase'
import {signInWithPopup , GoogleAuthProvider} from 'firebase/auth';

var userInfo =55;
const SignIn=()=> {
  const SignInWithFirebase = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication,provider)
    .then((re)=> {
      console.log(userInfo);
        var userInfo = re;
        //console.log(re.user.displayName
        console.log(re)
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  return (
    <>
    
    <button onClick={SignInWithFirebase}>Sign In With Google</button>
    
    </>
  )
}

export default SignIn;
