import React from 'React';

import Item from '../components/ProductSearch/Item';
import ItemsGrid from '../components/ProductSearch/ItemsGrid';
import SortingFilters from '../components/ProductSearch/SortingFilters';
import SearchInput from '../components/shared/SearchInput';
import ProductSortingFilters from '../constants/ProductSortingFilters';

class ProductSearch extends React.Component {
  state = {
    'searchFilterVal': '',
    'selectedSortingFilter': ProductSortingFilters[0]
  }

  onChangeSearchFilter = (searchFilterVal) => {
    this.setState({
      searchFilterVal
    });
  }

  onChangeSortingFilter = (selectedSortingFilter) => {
    this.setState({
      selectedSortingFilter
    });
  }

  render() {
    return (
      <div className="productSearch">
        <div className="productSearch__input">
          <SearchInput 
            onChange={this.onChangeSearchFilter} 
          />
        </div>
        <SortingFilters 
          onChange={this.onChangeSortingFilter} 
          selectedFilter={this.state.selectedSortingFilter}
        />
        <ItemsGrid 
          searchFilterVal={this.state.searchFilterVal}
          selectedSortingFilter={this.state.selectedSortingFilter}
        />
      </div>
    );
  }
}

export default ProductSearch;