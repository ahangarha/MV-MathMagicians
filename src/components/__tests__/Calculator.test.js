import React from 'react';
import Renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('Renders correctly', () => {
  const tree = Renderer
    .create(<Calculator />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
