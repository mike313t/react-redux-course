/**
 * Created by mtovbin on 5/4/2017.
 */
import 'babel-polyfill';   //transpire es6 to es5
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
