import React from 'react';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import Display from './pages/display'
import Home from './pages/intro'
import Detail from './pages/detail'
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path="/display" component={withRouter(Display)} />
            <Route exact path="/detail" component={withRouter(Detail)} />
        </Switch>
    </HashRouter>
);


export default BasicRoute;