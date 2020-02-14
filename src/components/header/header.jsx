import React from 'react';
import Logo from '../../assets/logo.png';
//import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartBox from '../cart-box/cart-box';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <img src={Logo} alt="Shop Clothes" className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as={'div'} onClick={() => auth.signOut()}>
          LOGOUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">Login/Register</OptionLink>
      )}
      <CartBox />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
