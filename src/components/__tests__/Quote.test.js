import React from 'react';
import Renderer from 'react-test-renderer';
import Quote from '../Quote';

it('Renders correctly', () => {
  const tree = Renderer
    .create(<Quote />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
