export function filterItems(items, searchFilterVal, selectedSortingFilter, selectedSortingOrder) {
  return items
    .filter((item) => {
      return item.itemTitle.toUpperCase().includes(searchFilterVal.toUpperCase()) || !searchFilterVal;
    })
    .sort((b, a) => {
      if (selectedSortingOrder === 'asc') {
        return b[selectedSortingFilter] - a[selectedSortingFilter];
      } else {
        return a[selectedSortingFilter] - b[selectedSortingFilter];
      }
    });
}