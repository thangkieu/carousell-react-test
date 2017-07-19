import React from 'react';
const Topic = ({ topic }) => (
  <div>
    <h4>{topic.title}</h4>
    <p>{topic.content}</p>
    <button>Vote</button>
  </div>
);

export default Topic;
