/**
 * @author Thang Kieu
 *
 * Component Topic
 * render content of single topic
 * with upvote and downvote buttons
 */

import React from 'react';
import './topic.css';

const Topic = ({ topic = {}, onUpVoteTopic, onDownVoteTopic }) => (
  <div className="topic-item">
    <h4>{topic.title}</h4>
    <p>{topic.content}</p>
    <button
      className="btn btn-default btn-sm btn-vote"
      onClick={onUpVoteTopic}
    >
      {topic.upvote > 0 && <span>{topic.upvote} | </span>}
      <span>Vote</span>
    </button>
    <button
      className="btn btn-link btn-sm btn-downvote"
      onClick={onDownVoteTopic}
    >
      {topic.downvote > 0 && <span>{topic.downvote} | </span>}
      <span>DownVote</span>
    </button>
  </div>
);

export default Topic;
