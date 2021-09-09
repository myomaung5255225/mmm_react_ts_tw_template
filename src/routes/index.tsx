import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { HomePage, PageNotFound } from "../pages";


export const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/404' component={PageNotFound} />
                <Redirect to='/404' />
            </Switch>
        </Router>
    )
}