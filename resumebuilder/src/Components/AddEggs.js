import React from 'react';
import '../CSS/AddEg.css';
import Nav from './Nav';
import EGGData from '../Context/EGGData';
export default function AddEggs({ user }) {
const profile = user;
  let EGGC = new EGGData();
 

  console.log(user);
  const [NameF, setNameF] = React.useState(user.displayName);
  return (
    <>
      <Nav Info={profile}></Nav>
      <div class='wrapper'>
        <div class='container'>
          <form method='POST' action='/addOrder'>
            <h1>
              <i class='fas fa-shipping-fast'></i>
              Shipping Details
            </h1>
            <div class='name'>
              <div>
                <label for='f-name'>Enter your name</label>
                <input
                  type='text'
                  name='fname'
                  value={NameF}
                  onChange={(event) => {
                    setNameF(event.target.value);
                  }}
                />
              </div>
              {/* <div>
              <label for='l-name'>Last</label>
              <input type='text' name='lname' />
            </div> */}
            </div>
            <div class='street'>
              <label for='name'>Email Address</label>
              <input type='text' name='email'  value={user.email} />
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
    </>
  );
}
