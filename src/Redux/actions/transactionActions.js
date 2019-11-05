// ==> API CONSTANTS <== \\
const BASE_URL = 'http://localhost:3000';
const CHARGES_URL = BASE_URL + '/charges';
// const SPECIFIC_LISTING_URL = id => LISTINGS_URL + '/' + id;

// ==> REDUX ACTIONS \\
const setTransactionAction = session => ({
    type: 'SET_TRANSACTION',
    payload: session
  });

// ==> FETCH <== \\
const createCharge = charge => dispatch => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(charge)
    };

    fetch(CHARGES_URL, config)
    .then(res => res.json())
    .then(sessionObj => {
        console.log(sessionObj)
        dispatch(setTransactionAction(sessionObj))
    })

};


export { createCharge };
