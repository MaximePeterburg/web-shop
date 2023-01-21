import React, { useContext } from 'react';
import Button from '../Button/Button';
import { CartContext } from '../contexts/Cart.context';
import './ProductCard.scss';

function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='ProductCard-container'>
      <img src={imageUrl} alt={`${name}`}></img>
      <div className='Footer'>
        <span className='Name'>{name}</span>
        <span className='Price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to Card
      </Button>
    </div>
  );
}

export default ProductCard;
