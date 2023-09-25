import './styles/index.css';
import { Route, Routes } from 'react-router-dom';
import { Accountants, ErrorPage, Home, appRoutes } from './pages';
import { Navbar } from './components/app';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={appRoutes.home} element={<Home />} />;
        <Route path={appRoutes.accountants} element={<Accountants />} />;
        <Route path="*" element={<ErrorPage />} />;
      </Routes>
    </>
  );
}

export default App;
