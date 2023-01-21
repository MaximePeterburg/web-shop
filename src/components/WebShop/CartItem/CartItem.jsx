import React from 'react';
import './CartItem.scss';

function CartItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='CartItem-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='ItemDetails'>
        <span className='Name'>{name}</span>
        <span className='Price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
