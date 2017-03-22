import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'

import reducer from './reducers';

import App from './components/App';
import Index from './components/Index'
import Transactions from './components/Transactions';

import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="/transactions" component={Transactions}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
