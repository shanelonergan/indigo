# Indigo

## Description

A clothing resale application created specifically for denim. It allows listing, sorting, and filtering based on denim specific attributes, creating a marketplace tailored to the needs of new and vintage high-quality denim garments.

## Motivation

Inspired by applications like [Grailed](https://www.grailed.com/) and [Poshmark](https://poshmark.com/), Indigo aims to cater exclusively to denim-lovers. Denim has seen a massive resurgence over the past 5 years, and consumers are now highly educated about the qualities of their denim garments. Close attention is paid to which mill the denim was sourced from, as well as the weight and wash of the denim. Vintage denim coming from prized mills is highly sought after, and many new companies have sprung up to create modern garments with the quality of the vintage heirlooms. Indigo aims to make finding specific and high-quality denim garments as simple and enjoyable as possible.

## Build Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/398cc6de-3a0b-4275-9a76-2dba030a0d30/deploy-status)](https://app.netlify.com/sites/indigo-deployment/deploys) ![Heroku](https://heroku-badge.herokuapp.com/?app=indigo-api-deployment&root=/users)

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
  - [React Redux](https://react-redux.js.org/)
  - [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- Routing
  - [React Router](https://www.npmjs.com/package/react-router-dom)
- User Interface
  - [Grommet](https://v2.grommet.io/)

### Back-End

[Link to Back-End Repo](https://github.com/shanelonergan/indigo-api)

- API
  - [Ruby on Rails](https://rubyonrails.org/)
  - [Active Model Serializer](https://github.com/rails-api/active_model_serializers)
- Database
  - [PostgreSQL](https://www.postgresql.org/)
- Authorization/Authentication
  - [JWT](https://jwt.io/)
  - [BCrypt](https://rubygems.org/gems/bcrypt/versions/3.1.12)

### Stripe API

Indigo utilizes the Stripe API to securely handle payment processing. It is integrated using [Stripe-Checkout-React](link). A walk-through of the relevant code can be found below:

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

Make sure to visit the [repo](https://github.com/shanelonergan/indigo-api) for the back-end and follow those instructions as well.

## Contributing

Pull requests are always welcome! Please make sure that your PR is [well-scoped](https://www.netlify.com/blog/2020/03/31/how-to-scope-down-prs/).

<table>
  <tr>
    <td align="center"><a href="http://shanelonergan.dev/"><img src="https://avatars2.githubusercontent.com/u/52255508?s=400&u=ca705fb2292c36027735a9b012b720a0ce869649&v=4" width="200px;" alt=""/><br /><sub><b>Shane Lonergan</b></sub></a><br /><a href="https://github.com/shanelonergan/indigo/commits?author=shanelonergan" title="Code">💻</a> <a href="#infra-sruti" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/sruti/covid19-riskfactors-app/issues/created_by/sruti https://github.com/shanelonergan/indigo/issues/created_by/shanelonergan" title="Bug reports">🐛</a><a href="#ideas-sruti" title="Ideas, Planning, & Feedback">💡</a></td>
    </tr>
</table>


## License

[MIT](https://choosealicense.com/licenses/mit/) © [Shane Lonergan](https://github.com/shanelonergan/)
