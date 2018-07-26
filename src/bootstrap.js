import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import history from './history';
import requireAuth from './components/requireAuth';

import Layout from './components/layout';
import Dashboard from './components/dashboard';
import NewNewsletter from './components/newsletter/newsletterNew';
import EditNewsletter from './components/newsletter/newsletterEdit';
import NewsletterDetail from './components/newsletter/newsletterDetail';

import Signup from './components/auth/signup';
import Signin from './components/auth/signin';



function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path='/' exact component={Signin}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>

            <Route path='/dashboard' component={requireAuth(Dashboard)}/>
            <Route path='/newsletter/new' component={NewNewsletter}/>
            <Route path='/newsletter/edit/:id' component={EditNewsletter}/>
            <Route path='/newsletter/detail/:id' component={NewsletterDetail}/>
          </Layout>
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
