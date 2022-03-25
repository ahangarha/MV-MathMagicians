import { render, screen } from '@testing-library/react';
import App from './App';

it('renders branding title', () => {
  render(<App />);
  const branding = screen.getByRole('heading', { name: 'Math Magicians' });
  expect(branding).toBeInTheDocument();
});
