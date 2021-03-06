import React from 'react';
import './Admin.css';
import Nav from '../Components/Nav';
import { Link } from 'react-router-dom';
import DashboardData  from './DashboardData';
import OrderTable from './OrderTable';
export default function AdminLog({user}) {
  console.log(user);

  return (
    <>
      <Nav Info={user}></Nav>
      {/* <form method='POST' action='/addTweet'>
        <div class='input-group justify-content-center'>
          <div class='input-group-prepend'>
            <input type='text' name='tweetInput' class='form-control' />
            <input type='submit' value='Send' class='btn btn-primary mb-2' />
          </div>
        </div>
      </form> */}

      {/* <br /> */}
      <h1 id='AdminTitle'>Admin Page</h1>
      {/* <section className='Dashsection'>
        <DashboardData></DashboardData>
      </section> */}
      <section className='Dashsection'>
        <OrderTable ></OrderTable>
      </section>
    </>
  );
}
