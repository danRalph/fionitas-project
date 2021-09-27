const configureStripe = require('stripe');
require('dotenv').config();


const STRIPE_SECRET_KEY = 'sk_test_XXXXXXXJh8VpJvWOXXXXjXG00IzzEkEkv';


const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
