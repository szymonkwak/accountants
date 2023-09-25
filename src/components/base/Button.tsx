import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  gap: 4px;
  cursor: pointer;
  color: var(--blue600);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 20px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: var(--blue50);

  &:hover {
    background-color: var(--blue75);
  }
  &:active {
    scale: 0.98;
  }
`;

const DisabledButton = styled(StyledButton)`
  color: var(--grey700);
  cursor: default;
  &:hover {
    background-color: var(--blue50);
  }
  &:active {
    scale: 1;
  }
`;

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, onClick, disabled } = props;

  if (disabled) return <DisabledButton>{children}</DisabledButton>;
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
