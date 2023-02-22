import React, { useContext } from 'react';
import { CartContext } from '../contexts/Cart.context';
import { CartIconConteiner, ItemCount, ShoppingIcon } from './CartIcon.styles';

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconConteiner onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconConteiner>
  );
}
export default CartIcon;
