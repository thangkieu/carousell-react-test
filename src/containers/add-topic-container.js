import React from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { addTopic, resetAddTopic } from '../actions/topic';

import AddTopic from '../components/add-topic';

const AddTopicContainer = (props) => (
  <AddTopic {...props} />
);

const mapStateToProps = state => ({
  addTopicSuccess: state.topic.addTopicSuccess
});

const mapDispatchToProps = (dispatch) => (bindActionCreators({
  addTopic,
  resetAddTopic
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(AddTopicContainer);
