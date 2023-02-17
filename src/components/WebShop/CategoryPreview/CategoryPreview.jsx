import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './CategoryPreview.scss';

function CategoryPreview({ title, products }) {
  return (
    <div className='CategoryPreview-container'>
      <h2>
        <span className='Title'>
          <Link to={title}>{title.toUpperCase()}</Link>
        </span>
      </h2>
      <div className='Preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
