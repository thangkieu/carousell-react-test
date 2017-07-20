import React from 'react';
import Topics from '../../components/topics';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { topics as TOPICS } from '../../mock';

it('Should match snapshot with full data', () => {
  const component = renderer.create(<Topics topics={TOPICS} />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Functions pass to component should be called', () => {
  const onRefresh =jest.fn();
  const component = mount(<Topics topics={TOPICS} onRefresh={onRefresh} />);

  component.find('.btn-refresh').simulate('click');
  expect(onRefresh).toBeCalled();
});
