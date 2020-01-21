import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import './css/main.css';
import PortfolioItem from './PortfolioItem';

function App() {
  return (
    <Router basename='/about-me'>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/projects/:id' component={PortfolioItem} />
    </Router>
  );
}

export default App;
