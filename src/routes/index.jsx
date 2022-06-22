import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { login, menu } from '../components/index';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={login}></Route>
        <Route exact path="/menu" component={menu} ></Route>
        <Redirect to="/"/>
    </Switch>
)

export default Routes;