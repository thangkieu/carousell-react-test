import {
  getTopics,
  addTopic,
  resetAddTopic,
  upVoteTopic,
  downVoteTopic
} from '../../actions/topic';

it('Function getTopics should return { type: \'GET_TOPICS\' }', () => {
  expect(getTopics()).toEqual({ type: 'GET_TOPICS' });
});

it('Function addTopic should return correct topic new item', () => {
  expect(addTopic({
    title: 'Topic Tittle',
    content: 'Topic Content'
  })).toMatchObject({
    type: 'ADD_TOPIC',
    topic: {
      upvote: 0,
      downvote: 0,
      title: 'Topic Tittle',
      content: 'Topic Content'
    }
  });
});

it('Function getTopics should return { type: \'RESET_ADD_TOPIC\' }', () => {
  expect(resetAddTopic()).toEqual({ type: 'RESET_ADD_TOPIC' });
});

it('Function getTopics should return { type: \'UP_VOTE_TOPIC\' }', () => {
  expect(upVoteTopic()).toEqual({ type: 'UP_VOTE_TOPIC' });
});

it('Function getTopics should return { type: \'DOWN_VOTE_TOPIC\' }', () => {
  expect(downVoteTopic()).toEqual({ type: 'DOWN_VOTE_TOPIC' });
});
