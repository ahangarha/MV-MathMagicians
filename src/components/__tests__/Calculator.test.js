import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('Renders correctly', () => {
  const tree = Renderer
    .create(<Calculator />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('shows 14 on "5 + 9 =" operation', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByRole('button', { name: '5' }));
  fireEvent.click(screen.getByRole('button', { name: '+' }));
  fireEvent.click(screen.getByRole('button', { name: '9' }));
  fireEvent.click(screen.getByRole('button', { name: '=' }));

  expect(screen.getByText('14')).toBeTruthy();
});

it('shows 552 on "555 - 3 =" operation', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByRole('button', { name: '5' }));
  fireEvent.click(screen.getByRole('button', { name: '5' }));
  fireEvent.click(screen.getByRole('button', { name: '5' }));
  fireEvent.click(screen.getByRole('button', { name: '-' }));
  fireEvent.click(screen.getByRole('button', { name: '3' }));
  fireEvent.click(screen.getByRole('button', { name: '=' }));

  expect(screen.getByText('552')).toBeTruthy();
});
