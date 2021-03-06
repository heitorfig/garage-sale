import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export interface ProductProps {
  title: string;
  price: number;
  photo?: string;
  stock?: number;
}

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: rgb(255, 255, 255, 0.95);
  border-radius: 5px;
  padding: 17px;
  border: 2px solid #e6e6ef;

  h2 {
    margin: 0;
    font-size: 1.3em;
    font-weight: bold;
    color: #444;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
    font-size: 1.8em;
    font-weight: bold;
    color: #0099ff;
    /* align-self: flex-end; */
  }

  span {
    position: relative;
    top: -1.8em;
    display: block;
    font-weight: 300;
    font-size: 0.8em;
    text-transform: uppercase;
    align-self: flex-end;
  }

  button {
    margin-top: auto;
    align-self: center;
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
    window.open(`https://api.whatsapp.com/send?phone=5514991784809&text=Olá,%20gostaria%20de%20comprar%20o%20produto%20${props.title}%20por%20R$ ${(props.price / 100).toLocaleString(undefined, {minimumFractionDigits: 2})}`);
  }

  return (
    <ProductStyled>
      <ImageWrapper>
        <img src={props.photo || `https://via.placeholder.com/640x640/0099ff/fff.jpg?text=${props.title}`} alt={props.title} />
      </ImageWrapper>
      <h2>{props.title}</h2>
      <h3><small>R$</small> {(props.price / 100).toLocaleString(undefined, {minimumFractionDigits: 2})}</h3>
      <span>Estoque: {props.stock || 1}</span>
      <Button onClick={buy} className="buy-button" id={props.title.replaceAll(' ', '-').toLowerCase()}>Tenho Interesse</Button>
    </ProductStyled>
  )
}
