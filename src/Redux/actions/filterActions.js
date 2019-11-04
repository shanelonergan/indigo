// ==> API CONSTANTS <== \\
const BASE_URL = 'http://localhost:3000';
const CATEGORIES_URL = BASE_URL + '/categories';
const BRANDS_URL = BASE_URL + '/brands';
const CONDITIONS_URL = BASE_URL + '/conditions';
const MILLS_URL = BASE_URL + '/mills';
const WASHES_URL = BASE_URL + '/washes';

// ==> REDUX ACTIONS \\
const setCategoriesAction = fetchObj => ({
    type: 'SET_CATEGORIES',
    payload: fetchObj
});

const setBrandsAction = fetchObj => ({
    type: 'SET_BRANDS',
    payload: fetchObj
})

const setConditionsAction = fetchObj => ({
    type: 'SET_CONDITIONS',
    payload: fetchObj
})

const setMillsAction = fetchObj => ({
    type: 'SET_MILLS',
    payload: fetchObj
})

const setWashesAction = fetchObj => ({
    type: 'SET_WASHES',
    payload: fetchObj
})

// ==> FETCH <== \\
const getCategories = () => dispatch => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: `bearer ` + localStorage.token
        }
    };
    fetch(CATEGORIES_URL, config)
        .then(res => res.json())
        .then(fetchObj => {
            console.log(fetchObj);
            dispatch(setCategoriesAction(fetchObj));
        });
};

const getBrands = () => dispatch => {

    const config = {
        method: 'GET',
        headers: {
            Authorization: `bearer ` + localStorage.token
        }
    };
    fetch(BRANDS_URL, config)
        .then(res => res.json())
        .then(fetchObj => {
            console.log(fetchObj);
            dispatch(setBrandsAction(fetchObj));
        });
};
const getConditions = () => dispatch => {

    const config = {
        method: 'GET',
        headers: {
            Authorization: `bearer ` + localStorage.token
        }
    };
    fetch(CONDITIONS_URL, config)
        .then(res => res.json())
        .then(fetchObj => {
            console.log(fetchObj);
            dispatch(setConditionsAction(fetchObj));
        });
};

const getMills = () => dispatch => {

    const config = {
        method: 'GET',
        headers: {
            Authorization: `bearer ` + localStorage.token
        }
    };
    fetch(MILLS_URL, config)
        .then(res => res.json())
        .then(fetchObj => {
            console.log(fetchObj);
            dispatch(setMillsAction(fetchObj));
        });
};

const getWashes = () => dispatch => {

    const config = {
        method: 'GET',
        headers: {
            Authorization: `bearer ` + localStorage.token
        }
    };
    fetch(WASHES_URL, config)
        .then(res => res.json())
        .then(fetchObj => {
            console.log(fetchObj);
            dispatch(setWashesAction(fetchObj));
        });
};

export { getCategories, getBrands, getConditions, getMills, getWashes };
