import React, { useContext } from 'react'
import './Cart.css'
import { Context } from './Context';
const Cart = () => {
  const {cartItems,food_list,removeformcart}=useContext(Context);
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-item-title'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
          
      </div>
    </div>
  )
}

export default Cart