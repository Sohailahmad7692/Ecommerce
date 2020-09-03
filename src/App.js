import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shoppage from './pages/shop/shop';

import './App.css';

import HomePage from './pages/hompage/homepage.jsx';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shoppage} />
        </Switch> 
    </div>
  );
}

export default App;