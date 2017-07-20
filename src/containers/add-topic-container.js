/**
 * @author Thang Kieu
 *
 * AddTopic container
 * Connect store to get status of adding new topic
 * dispatch action add topic and reset status of add new topic
 */

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
