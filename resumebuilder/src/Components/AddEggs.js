import React from 'react';
import '../CSS/AddEg.css';
import EGGData from '../Context/EGGData';
export default function AddEggs({ user }) {
  // const [count, setCount] = React.useState(0);

  /*function handleClick(){
    setCount(count + 1);
  } 

  function handleClick2(){
    setCount(count - 1);
  } */
  let EGGC = new EGGData();
  // console.log(EGGC.GetData());
  return (
    <div class='wrapper'>
      <div class='container'>
        <form method='POST' action='/addOrder'>
          <h1>
            <i class='fas fa-shipping-fast'></i>
            Shipping Details
          </h1>
          <div class='name'>
            <div>
              <label for='f-name'>First</label>
              <input type='text' name='fname' />
            </div>
            <div>
              <label for='l-name'>Last</label>
              <input type='text' name='lname' />
            </div>
          </div>
          <div class='street'>
            <label for='name'>Address</label>
            <input type='text' name='address' />
          </div>
          <div class='street'>
            <label for='name'>Number of Eggs Selected</label>
            <input type='text' name='Eggs' value={EGGC.GetData()} />
          </div>
          <div class='street'>
            <label for='name'>Order Value</label>
            <input type='text' name='EggsPrice' value={EGGC.GetData() * 7} />
          </div>
          <div class='street'>
            <label for='name'>UID</label>
            <input type='text' name='uid' value={user.uid} />
          </div>

          <div class='btns'>
            <button btn-primary>Purchase</button>

            {/* <button>Back to cart</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
