import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';


const PAYMENT_SERVER_URL = 'http://localhost:7000/payments';

const STRIPE_PUBLISHABLE = 'pk_test_hXXXXXXCVHQLbZeXLrXXgx00Qs5Zc35n';


const CURRENCY = 'GBP';

const fromPoundToPenny = amount => parseInt(amount * 100);

const successPayment = data => {
    alert('Payment Successful');
  };
  
  const errorPayment = data => {
    alert('Payment Error');
  };

  const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromPoundToPenny(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

   export const Checkout = ({ name, description, amount }) =>
  <StripeCheckout 
     name={name}
     description={description}
     amount={fromPoundToPenny(amount)}
     token={onToken(amount, description)}
     currency={CURRENCY}
     stripeKey={STRIPE_PUBLISHABLE}
     email
     allowRememberMe
     >
     <button className="btn-child">£5</button>
  </StripeCheckout>

  export const Checkout2 = ({ name, description, amount }) =>
  <StripeCheckout 
     name={name}
     description={description}
     amount={fromPoundToPenny(amount)}
     token={onToken(amount, description)}
     currency={CURRENCY}
     stripeKey={STRIPE_PUBLISHABLE}
     email
     allowRememberMe
     >
     <button className="btn-child2">£10</button>
  </StripeCheckout>

  export const Checkout3 = ({ name, description, amount }) =>
  <StripeCheckout 
  name={name}
  description={description}
  amount={fromPoundToPenny(amount)}
  token={onToken(amount, description)}
  currency={CURRENCY}
  stripeKey={STRIPE_PUBLISHABLE}
  email
  allowRememberMe
  >
  <button className="btn-child3">£20</button>
</StripeCheckout>

  export const Checkout4 = ({ name, description, amount }) =>
  <StripeCheckout 
  name={name}
  description={description}
  amount={fromPoundToPenny(amount)}
  token={onToken(amount, description)}
  currency={CURRENCY}
  stripeKey={STRIPE_PUBLISHABLE}
  email
  allowRememberMe
  >
  <button className="btn-child4">£30</button>
</StripeCheckout>



