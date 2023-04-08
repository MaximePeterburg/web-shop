import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../../store/cart/cart.selector';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { CartDropDownContainer, CartItems, EmptyMessage } from './CartDropdown.styles';

function CartDropdown() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropDownContainer>
  );
}

export default CartDropdown;
