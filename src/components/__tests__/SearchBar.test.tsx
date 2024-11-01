import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar/SearchBar';

test('renders SearchBar and submits city name', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByLabelText(/city name input/i);
    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.submit(screen.getByRole('form'));

    expect(mockOnSearch).toHaveBeenCalledWith('London');
});

// Test SearchBar Component
test('allows user to enter a city name', () => {
    render(<SearchBar onSearch={() => {}} />);
    const inputElement = screen.getByLabelText('City name input');
    fireEvent.change(inputElement, { target: { value: 'London' } });
    expect(screen.getByLabelText('City name input')).toHaveValue('London');
});

test('calls onSearch when search button is clicked', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    const inputElement = screen.getByLabelText('City name input');
    fireEvent.change(inputElement, { target: { value: 'London' } });
    const buttonElement = screen.getByLabelText('Search city');
    fireEvent.click(buttonElement);
    expect(mockOnSearch).toHaveBeenCalledWith('London');
});