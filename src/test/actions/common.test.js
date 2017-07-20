import { sortTopics } from '../../actions/common';

it('Should sort topics array correctly', () => {
  expect(
    sortTopics([
      {
        title: 'Topic 1',
        content: 'Topic 1 Content',
        upvote: 5,
        id: 1
      },
      {
        title: 'Topic 2',
        content: 'Topic 2 Content',
        upvote: 8,
        id: 2
      },
      {
        title: 'Topic 3',
        content: 'Topic 3 Content',
        upvote: 7,
        id: 3
      }
    ])
  ).toEqual([
    {
      title: 'Topic 2',
      content: 'Topic 2 Content',
      upvote: 8,
      id: 2
    },
    {
      title: 'Topic 3',
      content: 'Topic 3 Content',
      upvote: 7,
      id: 3
    },
    {
      title: 'Topic 1',
      content: 'Topic 1 Content',
      upvote: 5,
      id: 1
    }
  ]);
});
