import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  display: block;
  width: 100%;
  padding: 12px 10px;
  border-radius: 5px;
  color: #444;
  font-size: 1.1rem;
  /* font-weight: bold; */
  letter-spacing: 1px;
  /* text-transform: uppercase; */
  background: #fff;
  border: 2px solid #e6e6ef;
`;

export const Input = (props: any) => {
  return (
    <InputStyled {...props} />
  )
}
