// ==> API CONSTANTS <== \\
const BASE_URL = 'http://localhost:3000';
const LISTINGS_URL = BASE_URL + '/listings';
const SPECIFIC_LISTING_URL = id => LISTINGS_URL + '/' + id;

// ==> REDUX ACTIONS \\
const setListingAction = listingObj => ({
    type: 'SET_LISTING',
    payload: listingObj
})

const setAllListingsAction = listingsObj => ({
    type: 'SET_ALL_LISTINGS',
    payload: listingsObj
});

// const createListingAction = listingObj => ({
//     type: 'SET'
// })

// ==> FETCH <== \\
const createListing = listingInfo => dispatch => {
    const listingObj = {
        description: listingInfo.listing.description,
        waist: parseInt(listingInfo.listing.waist),
        length: parseInt(listingInfo.listing.length),
        weight: parseInt(listingInfo.listing.weight),
        wash_id: parseInt(listingInfo.listing.wash_id),
        mill_id: parseInt(listingInfo.listing.mill_id),
        category_id: parseInt(listingInfo.listing.category_id),
        brand_id: parseInt(listingInfo.listing.brand_id),
        condition_id: parseInt(listingInfo.listing.condition_id),
        name: listingInfo.listing.name,
        price: parseInt(listingInfo.listing.price),
        user_id: parseInt(listingInfo.user_id)
    }
    console.log(listingObj)
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
            console.log(listingObj)
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

const getListing = (id) => dispatch => {
    const url = SPECIFIC_LISTING_URL(id)
    const config = {
        method: 'GET',
        headers: {
            Authorization: `bearer ` + localStorage.token
        }
    };
    fetch(url, config)
        .then(res => res.json())
        .then(fetchObj => {
            console.log(fetchObj);
            dispatch(setListingAction(fetchObj));
        });
};


export { createListing, getAllListings, getListing };
