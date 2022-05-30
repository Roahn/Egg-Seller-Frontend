import React, { useEffect } from 'react'

import {Link} from 'react-dom'
// UserName Roahn
// // 6sDG5hhERmFyPofb
// Password

// mongodb+srv://Roahn:<password>@cluster0.hmqlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
export default function Data() {

  useEffect(()=>{
    fetchItems();
  },[]);
  const [items,setItems] = React.useState([]);

  const fetchItems = async()=>{
    const data = await fetch('/tweets');
    const items = await data.json(data);
    setItems(items);
  };
  return (
    <section>
     { items.map(item =>(
        <div>
          <p>
          {item.name}
          </p>
          
          <p>
          {item.msg}
            
          </p>
          
          <p>
          {item.username}
            
          </p>
         
        </div>
      ))}
    </section>
  )
}
