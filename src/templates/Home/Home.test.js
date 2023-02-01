import { render, screen } from '@testing-library/react';
import Home from '.';


test('renders learn react link', () => {
  render(<Home />);
  const buttonElement = screen.getByText(/Load more posts/i);
  expect(buttonElement).toBeInTheDocument();
});

