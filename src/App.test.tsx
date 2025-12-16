import { render, screen } from '@testing-library/react';

import App from './App';

test('renders Vite + React title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Vite \+ React/i);
  expect(titleElement).toBeInTheDocument();
});
