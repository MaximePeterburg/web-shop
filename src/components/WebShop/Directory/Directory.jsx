import React from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Directory.scss';

const Directory = ({ categories }) => {
  return (
    <div className='Directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
