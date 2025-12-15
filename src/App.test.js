import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Game Changer Room content', () => {
  render(<App />);
  const titleElement = screen.getByText(/Game Changer Room/i);
  expect(titleElement).toBeInTheDocument();
});
