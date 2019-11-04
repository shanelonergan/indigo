// ==> API CONSTANTS <== \\
const BASE_URL = 'http://localhost:3000';
const LISTINGS_URL = BASE_URL + '/listings';
const SPECIFIC_LISTING_URL = id => LISTINGS_URL + '/' + id;

// ==> REDUX ACTIONS \\
const setAllListingsAction = fetchObj => ({
    type: 'SET_ALL_LISTINGS',
    payload: fetchObj
});

// ==> FETCH <== \\
const createListing = listingObj => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(listingObj)
    };

    fetch(LISTINGS_URL, config)
        .then(res => res.json())
        .then(listingObj => {
            console.log(listingObj, 'create listing');
        });
};

const getAllListings = () => dispatch => {
    const config = {
        method: 'GET',
        headers: {
            Authorization: `bearer ` + localStorage.token
        }
    };
    fetch(LISTINGS_URL, config)
        .then(res => res.json())
        .then(listingsObj => {
            console.log(listingsObj);
            dispatch(setAllListingsAction(listingsObj));
        });
};


export { createListing };
