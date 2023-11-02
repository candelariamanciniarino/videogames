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
      {pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/:id" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  );
};

export default App;







// import './App.css';
// import Landing from './Views/Landing/Landing';
// import Home from './Views/Home/Home';
// import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import Create from './Views/Create/Create';
// //import NavBar from './Components/Navbar/navbar';
// import Details from './Views/Details/Details';

// function App() {
//   return (
//     <div className='App'>
//       <BrowserRouter>
//       {/* <Route path={"*"} component={NavBar}/> */}
//         <Switch>
//         {/* <Route path="/" component={NavBar} /> */}
//           <Route exact path="/" component={Landing} />
//            <Route path="/home" component={Home} /> 
//           <Route path="/details/:id" component={Details} />
//           <Route path="/create" component={Create} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App






