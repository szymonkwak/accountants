import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(RouterLink)<{ $underline?: boolean }>`
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
  color: var(--blue600);
  font-size: 14px;
  font-weight: 500;
  &:hover {
    color: var(--blue900);
  }
`;

interface LinkProps {
  to: string;
  children: React.ReactNode;
  underline?: boolean;
}

const Link = (props: LinkProps) => {
  const { to, children, underline } = props;

  return (
    <StyledLink to={to} $underline={underline}>
      {children}
    </StyledLink>
  );
};

export default Link;
