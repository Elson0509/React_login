import Dashboard from '../pages/Dashboard';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const AppRoutes = () => (
    <Switch>
        <Route exact path='/dashboard' component={Dashboard}/>
    </Switch>
)

export default AppRoutes;