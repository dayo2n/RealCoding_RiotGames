import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './pages/About';
import Home from './pages/Home';
import Cities from './pages/Cities';

function App() {
  const city = "Korea";
  return (
    <Router>
      <div className="App">
        <Header region = "KR" cityName = {city} />
        <ul className="navigation">
          <li><Link to="/" className="hyper">Home</Link></li>
          <li><Link to="/about" className="hyper">About</Link></li>
          <li><Link to="/cities" className="hyper">Cities</Link></li>
        </ul>

        <Switch>
          <Router path="/about">
            <About />
          </Router>
          <Router path="/cities">
            <Cities />
          </Router>
          <Router path="/">
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
