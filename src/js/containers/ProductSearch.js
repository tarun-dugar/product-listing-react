import React from 'React';

import Item from '../components/ProductSearch/Item';
import ItemsGrid from '../components/ProductSearch/ItemsGrid';
import SortingFilters from '../components/ProductSearch/SortingFilters';
import SearchInput from '../components/shared/SearchInput';
import ProductSortingFilters from '../constants/ProductSortingFilters';

class ProductSearch extends React.Component {
  state = {
    'searchFilterVal': '',
    'selectedSortingFilter': ProductSortingFilters[0],
    'selectedSortingOrder': 'asc'
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

  onChangeSortingOrder = (selectedSortingOrder) => {
    this.setState({
      selectedSortingOrder
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
          onChangeFilter={this.onChangeSortingFilter} 
          onChangeOrder={this.onChangeSortingOrder}
          selectedFilter={this.state.selectedSortingFilter}
          selectedOrder={this.state.selectedSortingOrder}
        />
        <ItemsGrid 
          searchFilterVal={this.state.searchFilterVal}
          selectedSortingFilter={this.state.selectedSortingFilter}
          selectedSortingOrder={this.state.selectedSortingOrder}
        />
      </div>
    );
  }
}

export default ProductSearch;