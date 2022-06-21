
import React, { useEffect } from 'react';
import MyOrder from './MyOrder';
import Nav from './Nav';
export default function OrderList({ user}) {
  const profile = user;
    useEffect(() => {
      fetchItems();
    }, []);
    const [items, setItems] = React.useState([]);

    const fetchItems = async () => {
      const data = await fetch(`/UserOrderData?uid=${user.uid}`);
      const items = await data.json(data);
      setItems(items);
    };

    //console.log(items);
    return (
      <>
        <Nav Info={profile}></Nav>
        <MyOrder user={user}></MyOrder>
      </>
    );
}
