import React from 'react';
import Topic from '../../components/topic';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

it('Should match snapshot with full data', () => {
  const component = renderer.create(<Topic topic={{
    title: 'Topic 1',
    content: 'Topic 1 content',
    upvote: 10,
    downvote: 5
}} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Functions pass to component should be called', () => {
  const onUpVoteTopic =jest.fn();
  const onDownVoteTopic =jest.fn();

  const component = mount(<Topic topic={{
    title: 'Topic title',
    content: 'Topic content'
  }} onUpVoteTopic={onUpVoteTopic} onDownVoteTopic={onDownVoteTopic} />);

  component.find('.btn-downvote').simulate('click');
  expect(onDownVoteTopic).toBeCalled();

  component.find('.btn-vote').simulate('click');
  expect(onUpVoteTopic).toBeCalled();
})
