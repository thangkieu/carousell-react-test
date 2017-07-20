import { topics as TOPICS } from '../mock';
import { sortTopics } from '../actions/common';

const initState = {
  topics: TOPICS,
  addTopicSuccess: false
};

const topic = (state = initState, action) => {
  switch (action.type) {
    case 'GET_TOPICS': {
      const rawTopics = Object.assign([], state.topics);
      const topics = sortTopics(rawTopics);
      // sort topics
      return Object.assign({}, state, {
        topics,
      });
    }


    case 'ADD_TOPIC': {
      const topics = state.topics;
      topics.push(action.topic);

      return Object.assign({}, state, {
        topics,
        addTopicSuccess: true
      });
    }

    case 'RESET_ADD_TOPIC': {
      return Object.assign({}, state, {
        addTopicSuccess: false
      });
    }

    case 'UP_VOTE_TOPIC': {
      const id = action.id;
      const topics = state.topics.map(topic => {
        if (topic.id === id) {
          topic.upvote = topic.upvote || 0;
          topic.upvote++;
        }

        return topic;
      });

      return Object.assign({}, state, {
        topics
      });
    }

    case 'DOWN_VOTE_TOPIC': {
      const id = action.id;
      const topics = state.topics.map(topic => {
        if (topic.id === id) {
          topic.downvote = topic.downvote || 0;
          topic.downvote++;
        }

        return topic;
      });

      return Object.assign({}, state, {
        topics
      });
    }

    default:
      return state;
  }
}

export default topic;
