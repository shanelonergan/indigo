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
const createCharge = token => dispatch => {
    let response

    const fetch = async token => {
        const charge = {
            token: token.id
        };
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ charge: charge })
        };

        let response = await fetch(CHARGES_URL, config)

    }

    fetch(token)
    if (response.ok) console.log('purchase complete!')

};

export { createCharge };
