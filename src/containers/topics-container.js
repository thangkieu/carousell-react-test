import React from 'react';
import { connect } from 'react-redux';

import Topics from '../components/topics';

const TopicsContainer = ({ topics }) => (
  <Topics topics={topics} />
);

function mapStateToProps(state) {
  return {
    topics: state.topic.topics
  }
}
export default connect(mapStateToProps, null)(TopicsContainer);
