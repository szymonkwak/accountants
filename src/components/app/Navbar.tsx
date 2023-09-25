import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { appRoutes } from '../../pages';
import { Link } from '../base';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--grey25);
  height: 60px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Link to={appRoutes.home} underline={pathname === appRoutes.home}>
        Start
      </Link>
      <Link to={appRoutes.accountants} underline={pathname === appRoutes.accountants}>
        Księgowi
      </Link>
    </Container>
  );
};

export default Navbar;
