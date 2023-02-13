import React, { useContext } from 'react';
import { CartContext } from '../contexts/Cart.context';
import './CheckoutItem.scss';

function CheckoutItem({ cartItem }) {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className='CheckoutItem-container'>
      <div className='Image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='Name'>{name}</span>
      <span className='Quantity'>
        <span className='Arrow' onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className='Value'>{quantity}</span>
        <span className='Arrow' onClick={addItemHandler}>
          &#10095;
        </span>
      </span>
      <span className='Price'>{price}</span>
      <span className='Remove-button' onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
}

export default CheckoutItem;
