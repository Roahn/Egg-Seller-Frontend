import React from 'react'


import { authentication } from './Firebase/firebase';

var user = authentication.currentUser;


  
export default function Nav  (props) {

  return (
    <>
      <h6>{props.Info.displayName}</h6>
      <div>Nav</div>
    </>
  );
}

