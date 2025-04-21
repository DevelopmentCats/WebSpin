import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #1a1a2e;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>WebSpin</Title>
    </HeaderContainer>
  );
};

export default Header;