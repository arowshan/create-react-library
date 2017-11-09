import React, { Component } from 'react';

import SearchMaster from '../lib/components/search-master';

import ResultCard from './result-card'
import FILTERS from './filters';
import SORTS from './sorts';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchMaster 
          resultComponent={<ResultCard />}
          searchFilters={[FILTERS]}
          sortCategories={SORTS}
          searchResultsPath={'data.SearchResult.SearchResultItems'}
          url={'https://data.usajobs.gov/api/Search'}
        />
      </div>
    );
  }

}

export default App;
