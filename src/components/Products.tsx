import React from 'react';
import styled from 'styled-components';
import { products } from '../data/products';
import { Product } from './Product';

const ProductsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px 20px 70px;
`;

export const Products = () => {
  return (
    <ProductsStyled>
      {products.map((product) => (
        <Product key={`product-${product.id}`} {...product} />
      ))}
    </ProductsStyled>
  )
}
