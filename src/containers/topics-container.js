/**
 * @author Thang Kieu
 *
 * Topic container
 * Connect store to get topics list
 * dispatch some actions
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Topics from '../components/topics';
import { upVoteTopic, downVoteTopic, getTopics } from '../actions/topic';

class TopicsContainer extends React.Component {
  componentDidMount() {
    this.props.getTopics();
  }

  render() {
    return (<Topics {...this.props} onRefresh={this.props.getTopics}/>)
  }
}

const mapStateToProps = state => ({
  topics: state.topic.topics
});

const mapDispatchToProps = dispatch => (bindActionCreators({
  upVoteTopic,
  downVoteTopic,
  getTopics
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
