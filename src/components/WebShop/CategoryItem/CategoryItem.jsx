import React from 'react';
import './CategoryItem.scss';

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className='Category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}></div>
      <div className='Category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  );
};

export default CategoryItem;
