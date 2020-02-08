import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import './css/main.css';
import PortfolioItemOne from './PortfolioItemOne';
import PortfolioItemTwo from './PortfolioItemTwo';
import PortfolioItemThree from './PortfolioItemThree';

function App() {
  return (
    <Router basename='/about-me'>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/projects/1' component={PortfolioItemOne} />
      <Route exact path='/projects/2' component={PortfolioItemTwo} />
      <Route exact path='/projects/3' component={PortfolioItemThree} />
    </Router>
  );
}

export default App;
