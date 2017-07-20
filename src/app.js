import React, { Component } from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

import './app.css';
import TopicsContainer from './containers/topics-container';
import AddTopicContainer from './containers/add-topic-container';
import { addNotification } from './actions/common';

class App extends Component {
  componentDidMount() {
    addNotification();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={TopicsContainer} />
          <Route path="/add" component={AddTopicContainer} />
        </Route>
      </Router>
    );
  }
}

export default App;
