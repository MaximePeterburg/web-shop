import React from 'react';
import Button from '../Button/Button';
import './ProductCard.scss';

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  return (
    <div className='ProductCard-container'>
      <img src={imageUrl} alt={`${name}`}></img>
      <div className='Footer'>
        <span className='Name'>{name}</span>
        <span className='Price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to Card</Button>
    </div>
  );
}

export default ProductCard;
