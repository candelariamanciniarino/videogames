import './App.css';
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Create from './Views/Create/Create';
import NavBar from './Components/Navbar/navbar';
import Details from './Views/Details/Details';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Route path={"*"} component={NavBar}/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/create" component={Create} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App






