import React from 'react'
import './Admin.css'
import Nav from '../Components/Nav';
import { Link } from 'react-router-dom';
export default function AdminLog(props) {



 const profile = props.title;
const ADD_FUNCTION = ()=>{
 
  fetch('http://localhost:4000/Add',{
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(props),
  }).console.log("New Order Added")
 }

  return (
    <>
      <Nav Info={profile}></Nav>
      
        <button className='btn btn-primary' id='Buy'
        onClick={ADD_FUNCTION} >
          ADd
        </button>
    
      <br />
      <h1 id='AdminTitle'>Admin Page</h1>
    </>
  );
}
