import React from 'react';
import '../CSS/AddEg.css';
import EGGData from '../Context/EGGData';
export default function AddEggs() {
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
        <form method='POST' action='/addTweet'>
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
            <label for='name'>Street</label>
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
          <div class='address-info'>
            <div>
              <label for='city'>City</label>
              <input type='text' name='city' />
            </div>
            <div>
              <label for='state'>State</label>
              <input type='text' name='state' />
            </div>
            <div>
              <label for='zip'>Zip</label>
              <input type='text' name='zip' />
            </div>
          </div>
          <h1>
            <i class='far fa-credit-card'></i> Payment Information
          </h1>
          <div class='cc-num'>
            <label for='card-num'>Credit Card No.</label>
            <input type='text' name='card-num' />
          </div>
          <div class='cc-info'>
            <div>
              <label for='card-num'>Exp</label>
              <input type='text' name='expire' />
            </div>
            <div>
              <label for='card-num'>CVV</label>
              <input type='text' name='security' />
            </div>
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
