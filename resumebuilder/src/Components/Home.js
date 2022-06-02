import React from 'react'
// import { getAuth, signOut } from "firebase/auth";
import {Link} from 'react-router-dom';
import '../Home.css'

import Nav from './Nav';
export default function Home(props) {
  const profile = props.title;
  const numberOfEggs = 0;

  const [count, setCount] = React.useState(0);

  function handleClick(){
    setCount(count + 1);
  } 

  function handleClick2(){
    setCount(count - 1);
  } 
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
      {/* <div className='container'>
        <Link to='/data'>Form Data</Link>
      </div> */}
      <p className="card-body">{count} </p>

      <button onClick={handleClick} className='btn btn-success'>
        +
      </button>
      <button onClick={handleClick2} className='btn btn-danger'>
        -
      </button>
     <br></br>

      <button className='btn btn-primary'> Checkout</button>
      <br></br>
      <Link to='/Buy'>
        <button className='btn btn-primary' id='Buy'>
          Checkout
        </button>
      </Link>{' '}

      
    </>
  );
}


