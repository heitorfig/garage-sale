import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export interface ProductProps {
  title: string;
  price: number;
  photo: string;
}

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255, 0.95);
  border-radius: 5px;
  padding: 17px;
  border: 2px solid #e6e6ef;

  h2 {
    margin: 0;
    font-size: 1.4em;
    font-weight: bold;
    color: #444;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
    font-size: 1.6em;
    font-weight: bold;
    color: #0099ff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    margin-bottom: 10px;
  }
`;

const ImageWrapper = styled.div`
  display: block;
  max-width: 100%;
  margin-bottom: 10px;

  img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const Product = (props: ProductProps) => {
  const buy = () => {
    window.open(`https://api.whatsapp.com/send?phone=5514991784809&text=Olá,%20gostaria%20de%20comprar%20o%20produto%20${props.title}%20por%20R$ ${(props.price / 100).toLocaleString()}`);
  }

  return (
    <ProductStyled>
      <ImageWrapper>
        <img src={props.photo} alt={props.title} />
      </ImageWrapper>
      <h2>{props.title}</h2>
      <h3>R$ {(props.price / 100).toLocaleString()}</h3>
      <Button onClick={buy}>Tenho Interesse</Button>
    </ProductStyled>
  )
}
