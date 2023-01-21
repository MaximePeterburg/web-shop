import React, { useContext } from 'react';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../contexts/Cart.context';
import './CartDropdown.scss';

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='CartDropdown-container'>
      <div className='CartItems'>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
        ) : (
          <span className='EmptyMessage'>Your cart is empty</span>
        )}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
