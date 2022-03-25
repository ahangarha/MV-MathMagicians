import React from 'react';
import Renderer from 'react-test-renderer';
import Home from '../Home';

it('Renders correctly', () => {
  const tree = Renderer
    .create(<Home />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
