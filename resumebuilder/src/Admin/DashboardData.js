import React, { useEffect } from 'react';
import './Dash.css'
import { Link } from 'react-dom';
// UserName Roahn
// // 6sDG5hhERmFyPofb
// Password

// mongodb+srv://Roahn:<password>@cluster0.hmqlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


export default function DashboardData() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = React.useState([]);

  const fetchItems = async () => {
    const data = await fetch('/DashData');
    const items = await data.json(data);
    setItems(items);
  };
  return (
    <section>
      <h3>
        <label>First Name</label>
        <label>Last Name</label>
        <label>Address</label>
        <label>Eggs Orders</label>
        <label>Order Price</label>
      </h3>
      {items.map((item) => (
        <div className='flex-container'>
          <h5 className='FNAME'>{item.FNAME}</h5>

          <h5 className='LNAME'>{item.LNAME}</h5>

          <h5 className='Address'>{item.Address}</h5>

          <h5 className='COUNT'>{item.COUNT}</h5>

          <h5 className='PRICE'>{item.PRICE}</h5>
          {/*  <button type='button' class='btn btn-primary '></button> */}
        </div>
      ))}
    </section>
  );
}
