import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.scrollTo = vi.fn();
});

test('renders the requested route', () => {
  window.history.pushState({}, '', '/getting-here');
  render(<App />);
  expect(screen.getByText(/traveling to the "island of wine"/i)).toBeInTheDocument();
  expect(screen.getByText(/directions to delamore cove/i)).toBeInTheDocument();
});
