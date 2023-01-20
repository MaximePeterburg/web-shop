import React from 'react';
import Button from '../Button/Button';
import './CartDropdown.scss';

function CartDropdown() {
  return (
    <div className='CartDropdown-container'>
      <div className='CartItems'></div>
      <Button />
    </div>
  );
}

export default CartDropdown;
