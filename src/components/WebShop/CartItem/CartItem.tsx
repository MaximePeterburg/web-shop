import React, { FC } from 'react';
import { CartItem as TCartItem } from '../../../store/cart/cart.types.js';
import './CartItem.styles';
import { CartItemContainer, ItemDetails } from './CartItem.styles';
export type CartItemProps = {
  cartItem: TCartItem;
};
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
