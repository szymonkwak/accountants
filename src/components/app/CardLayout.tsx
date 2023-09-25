import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const StyledDiv = styled.div`
  margin: 24px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface CardsLayoutProps {
  children?: React.ReactNode;
}

const CardsLayout = (props: CardsLayoutProps) => {
  const { children } = props;

  return (
    <Container>
      <StyledDiv>{children}</StyledDiv>
    </Container>
  );
};

export default CardsLayout;
