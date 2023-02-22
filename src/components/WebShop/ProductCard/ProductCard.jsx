import React, { useContext } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import { CartContext } from '../contexts/Cart.context';
import { Footer, Name, Price, ProductCartContainer } from './ProductCard.styles';

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => addItemToCart(product);

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
