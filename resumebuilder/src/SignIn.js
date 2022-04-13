import React from 'react'
import {authentication} from './Firebase/firebase'
import {signInWithPopup , GoogleAuthProvider} from 'firebase/auth';
import './GB.css'
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

      <button onClick={SignInWithFirebase}>

            <div class='row'>
              <div class='col-md-3'>
                  <img style = {{width:"20px"}}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" 
                  >
                    
                  
                  </img>
                Login with Google
                
              </div>
            </div>
      </button>
    </>
  );
}

export default SignIn;
