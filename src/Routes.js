import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {HomeContainer, FormContainer, ShopContainer, NewListingContainer} from './Containers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/signup' component={FormContainer}/>
            <Route path='/listings' exact component={ShopContainer} />
            <Route path='/listings/new' exact component={NewListingContainer} />

        </Switch>
    )
}

export default Routes
