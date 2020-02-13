import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartBox from '../cart-box/cart-box';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={Logo} alt="Shop Clothes" className="logo" />
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
