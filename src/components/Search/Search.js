import React from 'react';
import './search.css';

const Search = props => {
  return (
    <div>
      <input
        onChange={props.handleChange}
        type="text"
        value={props.searchText}
        className="search-box"
      />{' '}
      <button className="search-button" onClick={props.handleSearch}>
        Search
      </button>
      <button className="search-button" onClick={props.showSaved}>
        Show Saved
      </button>
    </div>
  );
};

export default Search;
