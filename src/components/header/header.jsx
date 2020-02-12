import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartBox from '../cart-box/cart-box';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          LOGOUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          Login/Register
        </Link>
      )}
      <CartBox />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
