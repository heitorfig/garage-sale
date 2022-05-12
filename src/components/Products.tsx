import React from 'react';
import styled from 'styled-components';
import { products } from '../data/products';
import { Input } from './Input';
import { Product } from './Product';

const ProductsSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px 20px 70px;
`;

export const Products = () => {
  const [productsList, setProductsList] = React.useState(products.sort((a, b) => {
      return a.price - b.price
    }).filter(product => !product.sold));
  const [search, setSearch] = React.useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleFilter = () => {
    const filteredProducts = products.filter(product => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    }).sort((a, b) => {
      return a.price - b.price
    }).filter(product => !product.sold);
    setProductsList(filteredProducts);
  }

  React.useEffect(() => {
    handleFilter();
  }, [search]);

  return (
    <>
      <ProductsSearchBar>
        <Input type="text" placeholder="Pesquisar Produtos" aria-label="Pesquisar Produtos" onChange={handleSearch} value={search} />
      </ProductsSearchBar>
      <ProductsList>
        {productsList.map((product, index) => (
          <Product key={`product-${product.id}-${index}`} {...product} />
        ))}
      </ProductsList>
    </>
  )
}
