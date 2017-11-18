export function filterItems(items, searchFilterVal, selectedSortingFilter) {
  return items
    .filter((item) => {
      return item.itemTitle.toUpperCase().includes(searchFilterVal.toUpperCase()) || !searchFilterVal;
    })
    .sort((b, a) => {
      if (selectedSortingFilter === 'rating') {
        return b.rating - a.rating;
      } else if (selectedSortingFilter === 'price') {
        return b.price - a.price;
      }
    });
}