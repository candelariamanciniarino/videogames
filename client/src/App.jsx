import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import LandingPage from './Views/landingPage/landingPage';
import HomePage from './Views/homePage/homePage';
import DetailPage from './Views/detailPage/detailPage';
import NavBar from '../src/components/navBar/navBar';
import CreatePage from './Views/createPage/createPage';
import './App.css';

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' && pathname!== "/create" && <NavBar mostrarSearch /> }
      {pathname ==="/create" && <NavBar mostrarSearch={false}/>}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
         <Route path="/create" element={<CreatePage />} /> 
      </Routes>
    </>
  );
};

export default App;









