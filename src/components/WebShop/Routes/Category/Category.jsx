import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/Categories.context';
import ProductCard from '../../ProductCard/ProductCard';
import { CategoryContainer, Title } from './Category.styles';

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
