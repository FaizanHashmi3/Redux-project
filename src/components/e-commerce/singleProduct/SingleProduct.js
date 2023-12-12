import React, { useState } from 'react';
import './SingleProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../../../redux/slices/cartSlice';

function SingleProduct({product}) {
    const cart=useSelector(state=>state.cartReducer.cart);
    const curItem=cart.find(item=>item.id==product.id);
   const curQuantity = curItem ? curItem.quantity:0;
   
    const dispatch = useDispatch();
    function add()
    {
       
        dispatch(addToCart(product.id));
    }
    function remove()
    {
        
       
        dispatch(removeFromCart(product.id));
    }
  return (
    <div className='single-product'>
        <img className='product-img' src={product.images[0]} alt={product.title}/>
        <div className='product-info'>
             <h2 className='product-title'>{product.title}</h2>
             <h4 className='product-price'>Rs {product.price}</h4>
        </div>
        <div className='cart-info'>
            <button className='button' onClick={add}>+</button>
            <h5>{curQuantity}</h5>
            <button className='button' onClick={remove}>-</button>
        </div>
       
    </div>
  )
}

export default SingleProduct