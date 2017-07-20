import topicReducer from '../../reducers/topic';
import { topics as TOPICS  } from '../../mock';

it('Should render initial topics list', () => {
  expect(topicReducer(undefined, {})).toEqual({
    topics: TOPICS,
    addTopicSuccess: false
  });
});

it('Should add correct topic', () => {
  expect(topicReducer({
    topics: []
  }, {
    type: 'ADD_TOPIC',
    topic: {
      title: 'New Topic',
      content: 'New Topic content'
    }
  })).toEqual({
    topics: [{
      title: 'New Topic',
      content: 'New Topic content'
    }],
    addTopicSuccess: true
  });
});

it('Should reset state of add new topic', () => {
  expect(topicReducer(undefined, {
    type: 'RESET_ADD_TOPIC',
  })).toEqual({
    addTopicSuccess: false,
    topics: TOPICS
  });
});

it('Should upvote a topic', () => {
  expect(topicReducer({
    topics: [{
      title: 'Topic 1',
      content: 'Topic 1 content',
      id: 1,
      upvote: 0,
      downvote: 0
    }]
  }, {
    type: 'UP_VOTE_TOPIC',
    id: 1
  })).toEqual({
    topics: [{
      title: 'Topic 1',
      content: 'Topic 1 content',
      id: 1,
      upvote: 1,
      downvote: 0
    }]
  });
});

it('Should downvote a topic', () => {
  expect(topicReducer({
    topics: [{
      title: 'Topic 1',
      content: 'Topic 1 content',
      id: 1,
      upvote: 0,
      downvote: 0
    }]
  }, {
    type: 'DOWN_VOTE_TOPIC',
    id: 1
  })).toEqual({
    topics: [{
      title: 'Topic 1',
      content: 'Topic 1 content',
      id: 1,
      upvote: 0,
      downvote: 1
    }]
  });
});
