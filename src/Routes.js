import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {HomeContainer, FormContainer} from './Containers'

const Routes = () => {
    return (
        <Switch>
            <Route path='/signup' component={FormContainer}/>
            <Route path='/' component={HomeContainer} />
        </Switch>
    )
}

export default Routes
