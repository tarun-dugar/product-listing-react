import React from 'react';

import Items from '../../constants/ProductItems';
import Item from './Item';
import { filterItems } from '../../utils/ProductSearch';

const ItemsGrid = ({ searchFilterVal, selectedSortingFilter }) => {
  const renderItems = () => {
    const filteredItems = filterItems(Items, searchFilterVal, selectedSortingFilter);
    if (filteredItems.length > 0) {
      return filteredItems.map((item) => {
        return (
          <Item itemData={item} />    
        );
      });
    } else {
      return (
        <div className="productItemsGrid__noResults">
          Sorry, no results found! 😬
        </div>
      );
    }
  }

  return (
    <div className="productItemsGrid">
      {renderItems()}
    </div>
  );
};

export default ItemsGrid;