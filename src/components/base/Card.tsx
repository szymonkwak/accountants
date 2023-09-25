import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 300px;
  min-width: 300px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e4e6e8;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
`;

interface CardProps {
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { children } = props;

  return <StyledCard>{children}</StyledCard>;
};

export default Card;
