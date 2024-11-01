import { render, screen } from '@testing-library/react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


test('renders error message correctly', () => {
    render(<ErrorMessage message="City not found" />);
    const errorMessage = screen.getByText(/Error: City not found/i);
    expect(errorMessage).toBeInTheDocument();
  });