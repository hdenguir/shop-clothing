import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import HomePage from './pages/home/homepage';
import ShopPage from './pages/shop/shoppage';
import LoginRegister from './pages/auth/login-register';
import Header from './components/header/header';
import Checkout from './pages/checkout/checkout';
import Contact from './pages/contact/contact';
import NotFound from './pages/notfound/notfound';

import './App.css';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <LoginRegister />)}
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, { checkUserSession })(App);
