
import React, { useEffect } from 'react';
import MyOrder from './MyOrder';
export default function OrderList({ user}) {
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
      <MyOrder user={user}></MyOrder>
  
      </>
    );
}
