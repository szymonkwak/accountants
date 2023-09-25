import styled from 'styled-components';
import { Link } from '../components/base';
import { appRoutes } from './routes';

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
  margin: 10px;
  font-size: 36px;
  font-weight: 700;
`;

const NoData = () => {
  return (
    <Container>
      <Title>Błąd</Title>
      Nie udało się pobrać danych
      <Link to={appRoutes.home} underline>
        Wróć
      </Link>
    </Container>
  );
};

export default NoData;
