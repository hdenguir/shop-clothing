import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop/shoppage';
import LoginRegister from './pages/auth/login-register';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={LoginRegister} />
        </Switch>
      </div>
    );
  }
}

export default App;
