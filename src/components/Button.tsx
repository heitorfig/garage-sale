import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-block;
  margin: 10px 0;
  padding: 14px 12px;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  /* font-weight: bold; */
  letter-spacing: 1px;
  /* text-transform: uppercase; */
  background: #0099ff;
  cursor: pointer;
  border: none;

  &:hover {
    background: #0099ff;
  }
`;

export const Button = (props: any) => {
  return (
    <ButtonStyled {...props}>
      {props.children}
    </ButtonStyled>
  )
}
