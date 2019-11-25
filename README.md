# Indigo

## Description

A clothing resale application created specifically for denim. It allows listing, sorting, and filtering based on denim specific attributes, creating a marketplace tailored to the needs of new and vintage high-quality denim garments.

## Motivation

Inspired by applications like Grailed and Poshmark, Indigo aims to cater exclusively to denim-lovers. Denim has seen a massive resurgence over the past 5 years, and consumers are now highly educated about the qualities of their denim garments. Close attention is paid to which mill the denim was sourced from, as well as the weight and wash of the denim. Vintage denim coming from prized mills is highly sought after, and many new companies have sprung up to create modern garments with the quality of the vintage heirlooms. Indigo aims to make finding specific and high-quality denim garments as simple and enjoyable as possible.

## Build Status

## Code Style

## Screenshots

![screenshot of Indigo's home page, part 1](./public/indigo-home-1.png 'home page 1')
![screenshot of Indigo's home page, part 1](./public/indigo-home-2.png 'home page 2')
![screenshot of Indigo's shopping page, showing many listings and filters for them](./public/indigo-listings.png 'listings')
![screenshot of Indigo's new listing form](./public/indigo-new-listing.png 'new listing')
![screenshot of Indigo's login modal](./public/indigo-login.png 'log in')
![screenshot of Indigo's sign up form](./public/indigo-signup.png 'sign up')

## Technologies

### Front-End

- Framework
  - [React](www.github.com/react)
- State Management
  - [Redux](link)
  - [React Hooks](link)
- Routing
  - [React Router](link)
- User Interface
  - [Grommet](www.github.com/grommet)

### Back-End

[Link to Back-End Repo](https://github.com/shanelonergan/indigo-api)

- API
  - [Ruby on Rails](link)
  - [Active Model Serializer](link)
- Database
  - [PostgreSQL](link)
- Authorization/Authentication
  - [JWT](link)
  - [BCrypt](link)

### Stripe API

Indigo utilizes the Stripe API to securely handle payment processing. It is integrated using [Stripe-Checkout-React](link). A walkthrough of the relevant code can be found below:

```javascript
// indigo/src/Routes.js

import React from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'

...

const renderListingContainer = () => {
    return (
        <StripeProvider apiKey="pk_test_LEfFcUQR5pRWI12plUR9V4Rq00MrKBR0Bg">
            <Elements>
                <ListingContainer/>
            </Elements>
        </StripeProvider>
    )
}
```

```javascript
import StripeCheckout from 'react-stripe-checkout';

...

<Box direction='row' align='center' alignSelf='center'>
    <StripeCheckout
        stripeKey='pk_test_LEfFcUQR5pRWI12plUR9V4Rq00MrKBR0Bg'
        amount={listing.price * 100} // stripe price is in cents
        currency='USD'
        token={onToken}
        panelLabel='Purchase for {{amount}}'
        ComponentClass='div'
        name='indigo'
        shippingAddress
    >
        <Button
            icon={<Stripe />}
            label='Purchase'
            margin={{ right: 'medium' }}

            color='brand'
            primary
        />
    </StripeCheckout>
</Box>
```

## Installation

Clone the repo and CD inside the directory

```bash
npm install
npm start
```

**Note:** if you are running the front-end together with the API, it is recommended that you start the Rails server first, then the NPM server. This will prompt you as to whether you want to run the NPM server on port 3001, to which you should respond yes.

Make sure to visit the repo for the back-end and follow those instructions as well.
