import React from 'react';
import Renderer from 'react-test-renderer';
import Button from '../Button';

it('Renders correctly', () => {
  const tree = Renderer
    .create(<Button value="+" onClick={() => { }} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
