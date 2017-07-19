import React from 'react';
import { Link } from 'react-router';

import Topic from '../topic';

const Topics = ({ topics }) => (
  <div>
    <div className="container">
      <h2>Topic list</h2>
      <Link to="/add" className="btn btn-link">Add Topic</Link>
      <div className="row">
        {
          topics && topics.length > 0 &&
          topics.map(topic => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <Topic topic={topic}/>
            </div>
          ))
        }
      </div>
    </div>
  </div>
);

export default Topics;
