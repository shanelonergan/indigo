import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {HomeContainer, FormContainer, ShopContainer} from './Containers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/signup' component={FormContainer}/>
            <Route path='/shop' exact component={ShopContainer} />
        </Switch>
    )
}

export default Routes
