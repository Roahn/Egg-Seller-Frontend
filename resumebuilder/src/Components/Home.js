import React from 'react';
// import { getAuth, signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import '../CSS/Home.css';

import Nav from './Nav';
import EGGData from '../Context/EGGData';
export default function Home(props) {
  const profile = props.title;
  //const numberOfEggs = 0;
  let EGGC = new EGGData();

  const [count, setCount] = React.useState(0);
  //const [price, setPrice] = React.useState(0);
  const Rate = 7;

  React.useEffect(() => {
    setCount(count);
    EGGC.SetData(count);
    //setPrice(price);
  }, [count]);
  function handleIncrease() {
    setCount(count + 1);

    //setPrice(Rate*count);
  }

  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }

    ///setPrice(Rate * count);
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

      {/* <div className='container'>
        <Link to='/data'>Form Data</Link>
      </div> */}
      <section className='container'>
        <section className='namecontainer'>
          <label className='label'>Egg Count</label>
          <input className='form' type='text' id='count' value={count} />
        </section>
        <br></br>
        <section className='btnContainer'>
          <button onClick={handleIncrease} className='button2'>  &nbsp;&nbsp;&nbsp; + &nbsp;&nbsp;&nbsp; </button>       
          <button onClick={handleDecrease} className='button1'> &nbsp;&nbsp;&nbsp;  -  &nbsp;&nbsp;&nbsp; </button>
        </section>
        <br></br>
        
        <section className='PriceContainer'>
          <label className='labelTag'>Egg Price</label>
          <input className='form' type='text' value={count * Rate} id='rate' />
          <br></br>
          <Link to='/Checkout'>
            
          
            <button className='btn btn-primary' id='Buy'>
              Checkout
            </button>
          </Link>
         
        </section>
      </section>
      <br></br>
    </>
  );
}
