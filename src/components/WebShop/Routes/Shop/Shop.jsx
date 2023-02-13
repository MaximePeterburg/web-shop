import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/Products.context';
import ProductCard from '../../ProductCard/ProductCard';
import SHOP_DATA from '../../ShopData.js';
import './Shop.scss';

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className='Shop-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
