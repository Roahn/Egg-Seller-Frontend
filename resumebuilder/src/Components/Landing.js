import React from 'react'
import '../Landing.css'
import {authentication} from '../Firebase/firebase'
import {signInWithPopup , GoogleAuthProvider} from 'firebase/auth';
export default function Landing() {

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
  return (<>
  <div>
    <h1>Egg Seller</h1>
    <button className='buy' onClick={SignInWithFirebase}>Buy Eggs</button>
  </div>
  </>
  )
}
