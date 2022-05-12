import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: inline-block;
  padding: 12px 10px;
  border-radius: 5px;
  color: white;
  font-size: 1.1rem;
  /* font-weight: bold; */
  letter-spacing: 1px;
  /* text-transform: uppercase; */
  background: #0099ff;
  cursor: pointer;
  border: none;
  white-space: nowrap;

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
