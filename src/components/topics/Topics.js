/**
 * @author Thang Kieu
 *
 * @description Topics component
 * list all of topics base on data from Topics Container
 */

import React from 'react';
import { Link } from 'react-router';

import Topic from '../topic';
import './topics.css';

const Topics = ({ topics, upVoteTopic, downVoteTopic, onRefresh }) => (
  <div className="topics-container">
    <div className="container">

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8 col-md-push-2">
          <div className="clearfix">
            <h2 className="pull-left">Topic list</h2>
            <Link to="/add" className="pull-right btn btn-primary btn-add-topic">Add Topic</Link>
            <button className="pull-right btn btn-link btn-refresh" onClick={onRefresh}>Refresh</button>
          </div>
          <div className="topic-list">
            {
              topics && topics.length > 0 &&
              topics.map(topic => (
                <Topic
                  key={topic.id}
                  topic={topic}
                  onUpVoteTopic={() => upVoteTopic && upVoteTopic(topic.id)}
                  onDownVoteTopic={() => downVoteTopic && downVoteTopic(topic.id)}
                />
              ))
            }
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Topics;
