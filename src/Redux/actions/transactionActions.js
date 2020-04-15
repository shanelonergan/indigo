// ==> API CONSTANTS <== \\
const BASE_URL = 'https://indigo-api-deployment.herokuapp.com';
const TRANSACTIONS_URL = BASE_URL + '/transactions';

// ==> FETCH <== \\
const createTransaction = (listing, loggedInUser) => dispatch => {

    const transactionObj = {
        buyer_id: loggedInUser.id,
        seller_id: listing.user.id,
        listing_id: listing.id,
        final_price: listing.price
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

export {
    createTransaction
}
