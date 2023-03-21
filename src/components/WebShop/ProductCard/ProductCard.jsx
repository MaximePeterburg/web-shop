import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../store/cart/cart.action';
import { selectCartItems } from '../../../store/cart/cart.selector';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import { Footer, Name, Price, ProductCartContainer } from './ProductCard.styles';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`}></img>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to Card
      </Button>
    </ProductCartContainer>
  );
}

export default ProductCard;
