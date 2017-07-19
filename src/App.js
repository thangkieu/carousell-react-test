import React, { Component } from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

import logo from './logo.svg';
import './App.css';
import TopicsContainer from './containers/topics-container';
import AddTopic from './components/add-topic';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={TopicsContainer} />
          <Route path="/add" component={AddTopic} />
        </Route>
      </Router>
    );
  }
}

export default App;
