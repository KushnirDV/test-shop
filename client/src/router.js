import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';
import Async from './utils/asyncFuncs';

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
        <header>
          <h1 className="head-title">Test shop</h1>
        </header>
        <div className="common-content">
          <Switch>
              <Route exact path="/" component={(props) => <Async props={props} provider={ () => import('./components/Desctop/Home/home') }/> }/>
              <Route path="/cart" component={(props) => <Async props={props} provider={ () => import('./components/Desctop/Cart/cart') }/> }/>
              <Route path="*">
                  <Redirect to="/" />
              </Route>
          </Switch>
        </div>
        <footer>
          Home production &copy;2020 Created&nbsp;by&nbsp;Denis&nbsp;Kushnir
        </footer>
    </ConnectedRouter>
  );
}

export default Routes;


