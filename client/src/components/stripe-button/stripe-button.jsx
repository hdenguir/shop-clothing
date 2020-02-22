import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export const StripeCheckoutButton = ({ price }) => {
  const priceStripe = price * 100;
  const publishableKey = 'pk_test_LufmhvPFMvNt6LTFyvoBOz2r00sg64QpZL';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceStripe,
        token
      }
    })
      .then(res => {
        alert('Payement Successful');
      })
      .catch(error => {
        console.log('Payment error : ' + error);
        alert(
          'There was an issue with your payment. Please sure you use the provided credit cart.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SHOP Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
