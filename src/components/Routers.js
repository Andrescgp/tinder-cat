import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route

} from 'react-router-dom'
import { Home } from '/Home'

export const Routers = () => (

    <Router>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/login'>
                <Login />
                <Route path='/signup'>
                <Signup />
            </Route>
        </Switch >
    </Router >
)