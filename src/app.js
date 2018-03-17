import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Link, Switch,hashHistory} from 'react-router-dom';

import {Provider} from 'react-redux';

import Home from './js/pages/home';
import List from './js/pages/list';

import configureStore from './js/store/configureStore';
const store = configureStore();

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={List}></Route>
        <Route path="/list" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

render(App, document.getElementById('app'));
