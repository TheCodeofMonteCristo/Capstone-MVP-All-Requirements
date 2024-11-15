import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CityList from './pages/CityList';  // Import CityList component
import CityCard from './components/CityCard'; // Import CityCard component

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Define routes for different pages */}
          <Route path="/" exact component={CityList} /> {/* Home route to show city list */}
          <Route path="/city/:id" component={CityCard} /> {/* Route for individual city */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;





/*

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/