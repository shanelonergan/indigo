// ==> API CONSTANTS <== \\
const BASE_URL = 'http://localhost:3000';
const TRANSACTIONS_URL = BASE_URL + '/transactions';

// ==> FETCH <== \\
const createTransaction = (loggedInUser, listingObj) => dispatch => {
    transactionObj = {
        buyer_id: loggedInUser.id,
        seller_id: listingObj.user.username,
        listing_id: listingObj.id,
        final_price: listingObj.price
    }
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactionObj)
    };

    fetch(TRANSACTIONS_URL, config)
      .then(res => res.json())
      .then(transactionObj => {
          console.log(transactionObj, "create transaction")
      });
  };
