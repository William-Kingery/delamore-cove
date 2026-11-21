import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeAll(() => {
  window.scrollTo = vi.fn();
});

test('renders the requested route', () => {
  window.history.pushState({}, '', '/getting-here');
  render(<App />);
  expect(screen.getByRole('heading', { name: /cross the water/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /open in google maps/i })).toBeInTheDocument();
});

test('opens a suite as an accessible dialog', async () => {
  const user = userEvent.setup();
  window.history.pushState({}, '', '/suites');
  render(<App />);
  await user.click(screen.getByRole('button', { name: /explore kauri/i }));
  expect(screen.getByRole('dialog', { name: /kauri/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /check kauri availability/i })).toBeInTheDocument();
});
