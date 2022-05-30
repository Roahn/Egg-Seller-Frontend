import React from 'react'
import '../AddEg.css'
export default function AddEggs() {

  const [count, setCount] = React.useState(0);
 

  
  function handleClick(){
    setCount(count + 1);
  } 

  function handleClick2(){
    setCount(count - 1);
  } 

  return (
    <div className="parent">
      <p className="card-body">{count} </p>

      <button onClick={handleClick} className='btn btn-success'>
        +
      </button>
      <button onClick={handleClick2} className='btn btn-danger'>
        -
      </button>
     <br></br>

      <button className='btn btn-primary'> Checkout</button>
    </div>
  );
  
}
