/*
 * @Author: Chengxu Bian
 * @Date: 2020-06-25 11:13:26
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-06-25 11:14:03
 */
import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Display from "./pages/display";
import Home from "./pages/intro";
import Detail from "./pages/detail";
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={withRouter(Home)} />
      <Route exact path="/display" component={withRouter(Display)} />
      <Route exact path="/detail" component={withRouter(Detail)} />
    </Switch>
  </BrowserRouter>
);

export default Router;
