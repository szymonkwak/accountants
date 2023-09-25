import React from 'react';
import styled from 'styled-components';
import { appRoutes } from './routes';
import { Button, Link } from '../components/base';

const Container = styled.div`
  padding: 24px;
  height: 80vh;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

const Home = () => {
  return (
    <Container>
      <Title>Strona startowa</Title>
      Aplikacja do zarządzania księgowymi
      <Link to={appRoutes.accountants}>
        <Button>Przejdź do listy księgowych</Button>
      </Link>
    </Container>
  );
};

export default Home;
