import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/ShoppingBag.svg';
import { CartContext } from '../contexts/Cart.context';
import './CartIcon.scss';

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='CartIcon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='ShoppingIcon' />
      <span className='ItemCount'>{cartItemCount}</span>
    </div>
  );
}
export default CartIcon;
