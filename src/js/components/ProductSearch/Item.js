import React from 'react';

import Ratings from '../shared/Ratings';

const ProductItem = ({ itemData }) => {
  return (
    <div className="productItem">
      <div className="productItem__title">
        {itemData.itemTitle}        
      </div>
      <div 
        className="productItem__img" 
        style={{backgroundImage: `url(${itemData.itemImage})`}} 
      />
      <div className="flex flex-between">
        <div className="productItem__price">{itemData.price.toLocaleString('en', { useGrouping: true })}</div>
        <Ratings rating={itemData.rating} />        
      </div>
      <ul>
        {(() => {
          return itemData.features.map((feature) => {
            return (
              <li className="productItem__feature">
                {feature}
              </li>
            );
          });
        })()}
      </ul>
    </div>
  );
};

export default ProductItem;