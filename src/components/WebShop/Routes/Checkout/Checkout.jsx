import React, { useContext } from 'react';
import CheckoutItem from '../../CheckoutItem/CheckoutItem';
import { CartContext } from '../../contexts/Cart.context';
import './Checkout.scss';

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='Checkout-container'>
      <div className='Checkout-header'>
        <div className='Header-block'>
          <span>Product</span>
        </div>
        <div className='Header-block'>
          <span>Description</span>
        </div>
        <div className='Header-block'>
          <span>Quantity</span>
        </div>
        <div className='Header-block'>
          <span>Price</span>
        </div>
        <div className='Header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <div className='Total'>Total: ${cartTotal}</div>
    </div>
  );
}

export default Checkout;
