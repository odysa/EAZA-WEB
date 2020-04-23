import React from 'react';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import Display from './pages/display'
import Home from './pages/intro'
import { CookiesProvider } from 'react-cookie';
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path="/display" component={withRouter(Display)} />
        </Switch>
    </HashRouter>
);


export default BasicRoute;