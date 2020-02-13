import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({ price }) => {
  const priceStripe = price * 100;
  const publishableKey = 'pk_test_LufmhvPFMvNt6LTFyvoBOz2r00sg64QpZL';

  const onToken = token => {
    alert('Payement Successful');
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
