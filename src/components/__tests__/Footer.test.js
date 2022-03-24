import React from 'react';
import Renderer from 'react-test-renderer';
import Footer from '../Footer';

it('Renders correctly', () => {
  const tree = Renderer
    .create(<Footer />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
