import React from 'react';
import classNames from 'classnames';

const SearchInput = ({ onChange }) => {
  const onChangeInput = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for products..."
        onChange={onChangeInput}
        className="searchInput" 
      />
      <i className="searchInput__icon">🔍</i>      
    </div>
  );
};

export default SearchInput;