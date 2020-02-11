import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
