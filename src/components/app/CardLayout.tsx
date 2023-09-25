import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  max-width: 1320px;
  margin: 24px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

interface CardsLayoutProps {
  children?: React.ReactNode;
}

const CardsLayout = (props: CardsLayoutProps) => {
  const { children } = props;

  return <StyledDiv>{children}</StyledDiv>;
};

export default CardsLayout;
