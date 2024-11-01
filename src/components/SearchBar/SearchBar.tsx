import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>(''); // {{ edit_2 }}

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSearch} aria-label="Search form">
      <input
        type="text"
        className="search-input"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="City name input"
      />
      <button type="submit" className="search-button" aria-label="Search city">Search</button>
    </form>
  );
};

export default SearchBar;