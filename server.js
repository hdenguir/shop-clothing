const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

const PORT = process.env.PORT || 5000;
app.get('*', (req, res) => {
  console.log(req.headers);
  console.log(req.method);
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  } else {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
  }
});

app.post('/payment', (req, res) => {
  const {
    token: { id },
    amount,
  } = req.body;
  try {
    const body = {
      source: id,
      amount: amount,
      currency: 'usd',
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(PORT, err => {
  if (err) console.log(err); // throw err;
  console.log('Server running on port ' + PORT);
});
