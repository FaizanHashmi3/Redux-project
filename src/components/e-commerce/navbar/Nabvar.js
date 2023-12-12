import React, { useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import './Navbar.css';
import { useSelector } from 'react-redux';

function Nabvar() {
  const cart=useSelector(state=>state.cartReducer.cart);
  let count=0;
  cart.forEach(element => {
    count+=element.quantity;
  });

  
  
  return (
   <nav>
    <h2 className='banner'>My Myntra</h2>
    <div className='right-layout'>
        <div className='cart-layout'>
            <FaCartArrowDown />
            <h3>{count}</h3>
        </div>

    </div>

   </nav>
  )
}

export default Nabvar