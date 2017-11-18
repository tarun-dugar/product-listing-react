import React from 'react';

const Ratings = ({ rating }) => {
  return (
    <div>
      {(() => {
        return [...Array(Math.round(rating))].map(() => {
          return (
            <span>⭐</span>
          );
        });
      })()}
    </div>
  );
};

export default Ratings;