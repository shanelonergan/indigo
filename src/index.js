import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import filterReducer from './Redux/filterReducer.js'
import userReducer from './Redux/userReducer.js'
import listingReducer from './Redux/listingReducer.js'
import App from './App';
import * as serviceWorker from './serviceWorker';

const reducer = combineReducers({
    user: userReducer,
    filters: filterReducer,
    listings: listingReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
