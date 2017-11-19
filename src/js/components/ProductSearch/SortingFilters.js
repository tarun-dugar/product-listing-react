import React from 'react';
import classNames from 'classnames';

import Filters from '../../constants/ProductSortingFilters';
import { capitalizeFirstLetter } from '../../utils/core'; 

const ProductFilters = ({ onChangeFilter, selectedFilter, selectedOrder, onChangeOrder }) => {
  const onClickFilter = (e) => {
    onChangeFilter(e.currentTarget.dataset.filter);
  }

  const renderSortingFilters = () => {
    return Filters.map((filter) => {
      const filterClass = classNames('productSortingFilter', {
        'productSortingFilter--selected': filter === selectedFilter
      });
      return (
        <div 
          className={filterClass} 
          onClick={onClickFilter}
          data-filter={filter}
        >
          <span>{capitalizeFirstLetter(filter)}</span>
        </div>
      );
    });
  }

  const ascIconClass = classNames('flex-center productSortingFilters__order', {
    'productSortingFilters__order--selected': selectedOrder === 'asc'
  });

  const descIconClass = classNames('flex-center productSortingFilters__order', {
    'productSortingFilters__order--selected': selectedOrder === 'desc'
  });

  return (
    <div className="productSortingFilters">
      <div className="flex-center productSortingFilters__label">SORT BY</div>
      {renderSortingFilters()}
      <div 
        className={ascIconClass}
        onClick={onChangeOrder.bind(null, 'asc')}
      >
        ↑
      </div>
      <div 
        className={descIconClass}
        onClick={onChangeOrder.bind(null, 'desc')}
      >
        ↓
      </div>
    </div>
  );
};

export default ProductFilters;