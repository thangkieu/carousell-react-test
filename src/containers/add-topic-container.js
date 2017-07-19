import React from 'react';
import { connect } from 'react-redux';
import { addTopic } from '../../actions/topic';

import AddTopic from '../components/add-topic';

const AddTopicContainer = ({ addTopic }) => (
  <AddTopic addTopic={addTopic} />
);

const mapDispatchToProps = () => ({
  addTopic
});

export default connect(null, mapDispatchToProps)(AddTopicContainer);
