import { useState } from 'react';
import './style.css';

export const SearchBox = ({ onSearch, onClose, isSearching }) => {
  const [searchText, setSearchText] = useState('');
  const handleSearchClick = () => {
    setSearchText('');
    onClose();
  }
  return(
    <div className='search-box'>
      <h2 className='search-box-title'>Personal Search</h2>
      <div className='search-box-buttons'>
        <label>
          <input 
            value={searchText} 
            onChange={({ target: { value } }) => setSearchText(value)} 
            className="search-box-input"
          />
        </label>
        <button onClick={() => onSearch(searchText)} disabled={!searchText.length}>Search</button>
        {isSearching && <button onClick={handleSearchClick} disabled={!searchText.length}>Close</button>}
      </div>
    </div>
  );
}