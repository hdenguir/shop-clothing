import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import './checkout.scss';

export const Checkout = ({ cartsItems, total }) => {
  return (
    <div className="checkout-page">
      {cartsItems.length > 0 && (
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
      )}
      {cartsItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {cartsItems.length > 0 && (
        <>
          <div className="total">
            <span>TOTAL: ${total}</span>
          </div>
          <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 05/20 - CVV: 123
          </div>
          <StripeCheckoutButton price={total} />
        </>
      )}
      {cartsItems.length === 0 && <p>Cart is empty !!!!</p>}
    </div>
  );
};

const mapStateToProps = state =>
  createStructuredSelector({
    cartsItems: selectCartItems,
    total: selectCartTotal
  });

export default connect(mapStateToProps)(Checkout);
