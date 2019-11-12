import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {StripeProvider, Elements} from 'react-stripe-elements'

import {HomeContainer, FormContainer, ShopContainer, NewListingContainer, ListingContainer} from './Containers'

const renderListingContainer = () => {
    return (
        <StripeProvider apiKey="pk_test_LEfFcUQR5pRWI12plUR9V4Rq00MrKBR0Bg">
            <Elements>
                <ListingContainer/>
            </Elements>
        </StripeProvider>
    )
}

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/signup' component={FormContainer}/>
            <Route path='/listings' exact component={ShopContainer} />
            <Route path='/listings/new' exact component={NewListingContainer} />
            <Route path='/listings/pants' exact component={ShopContainer} />
            <Route path='/listings/shirts' exact component={ShopContainer} />
            <Route path='/listings/jackets' exact component={ShopContainer} />
            <Route path='/listings/:id' render={renderListingContainer} />


        </Switch>
    )
}

export default Routes
