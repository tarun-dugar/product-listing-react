import React from 'react';

import Filters from '../../constants/ProductSortingFilters';
import { capitalizeFirstLetter } from '../../utils/core'; 

const ProductFilters = ({ onChange, selectedFilter }) => {
  const onChangeRadio = (e) => {
    onChange(e.target.value);
  }

  const renderSortingFilters = () => {
    return Filters.map((filter) => {
      return (
        <div className="productSortingFilter">
          <input 
            type="radio" 
            name="sortingFilters" 
            key={filter}
            value={filter} 
            onChange={onChangeRadio} 
            checked={selectedFilter === filter}
          />
          <span>{capitalizeFirstLetter(filter)}</span>
        </div>
      );
    });
  }

  return (
    <div className="productSortingFilters">
      {renderSortingFilters()}
    </div>
  );
};

export default ProductFilters;