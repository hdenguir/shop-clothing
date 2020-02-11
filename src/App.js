import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shoppage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
