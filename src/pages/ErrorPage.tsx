import styled from 'styled-components';
import { appRoutes } from './routes';
import { Link } from '../components/base';

const Container = styled.div`
  height: 80vh;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

const ErrorPage = () => {
  return (
    <Container>
      <Title>404</Title>
      coś poszło nie tak...
      <Link to={appRoutes.home} underline>
        Wróć
      </Link>
    </Container>
  );
};

export default ErrorPage;
