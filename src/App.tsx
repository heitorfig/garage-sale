import React from 'react';
import styled from 'styled-components';
import { Products } from './components/Products';

const PageHeader = styled.header`
  width: 100%;
  padding: 35px 0;
  text-align: center;
  background-color: #0099ff;

  h1 {
    margin: 0;
    margin-bottom: 15px;
    color: white;
    font-size: 3.2rem;
    text-transform: uppercase;

    small {
      display: block;
    }
  }

  p {
    margin: 0;
    color: white;
    font-size: 1.3rem;
    font-weight: 300;
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  background: url('./assets/img/bg.svg') no-repeat;
  background-position: center -10px;
  background-size: 110% auto;
`;

const PageWrapperInner = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <PageHeader>
        <h1>Garage Sale <small>Família Figueiredo</small></h1>
        <p>Estamos nos mudando e vendendo tudo que não vamos levar,<br />dá uma olhada e é só clicar no que tiver interesse.</p>
      </PageHeader>
      <PageWrapper>
        <PageWrapperInner>
          <Products />
        </PageWrapperInner>
      </PageWrapper>
    </>
  );
}

export default App;
