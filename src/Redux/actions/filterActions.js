// ==> API CONSTANTS <== \\
const BASE_URL = 'http://localhost:3000';
const CATEGORIES_URL = BASE_URL + '/categories';
const BRANDS_URL = BASE_URL + '/brands';
const CONDITIONS_URL = BASE_URL + '/conditions';
const MILLS_URL = BASE_URL + '/mills';
const WASHES_URL = BASE_URL + '/washes';

// ==> REDUX ACTIONS \\
const setFilters = fetchObj => ({
    type: 'SET_FILTERS',
    payload: fetchObj
  });

// ==> FETCH <== \\
const getFilter = (url) => dispatch => {
    const config = {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json'
      }
    };
    fetch(url, config)
      .then(res => res.json())
      .then(fetchObj => {
            console.log(fetchObj)
            dispatch(setFilters(fetchObj));
      });
  };

const getAllFilters = () => {
    getFilter(CATEGORIES_URL)
    getFilter(BRANDS_URL)
    getFilter(CONDITIONS_URL)
    getFilter(MILLS_URL)
    getFilter(WASHES_URL)
}

  export {
      getFilter,
      getAllFilters
  }
