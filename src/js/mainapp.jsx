import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import App from './App.jsx';
import Index from './Index.jsx';
import Prof from './Prof.jsx';
import Profs from './Profs.jsx';
import Postings from './Postings.jsx';
import Posting from './Posting.jsx';
import NotFound from './NotFound.jsx';

var app = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="profs/:profID" component={Prof} />
      <Route path="profs" component={Profs} />
      <Route path="postings/:postingID" component={Posting} />
      <Route path="postings" component={Postings} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);
  
ReactDOM.render(app, document.body);
