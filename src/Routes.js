import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {HomeContainer, FormContainer, ShopContainer, NewListingContainer, ListingContainer} from './Containers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/signup' component={FormContainer}/>
            <Route path='/listings' exact component={ShopContainer} />
            <Route path='/listings/new' exact component={NewListingContainer} />
            <Route path='/listings/:id' component={ListingContainer} />

        </Switch>
    )
}

export default Routes
