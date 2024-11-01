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
    <form onSubmit={handleSearch} aria-label="Search form" className="search-bar">
     <input
        type="text"
        className="search-input"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update the city state when input changes
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </form>
  );
};

export default SearchBar;