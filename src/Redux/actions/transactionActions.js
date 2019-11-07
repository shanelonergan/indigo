// ==> API CONSTANTS <== \\
const BASE_URL = 'http://localhost:3000';
const TRANSACTIONS_URL = BASE_URL + '/transactions';

// ==> FETCH <== \\
const createTransaction = transactionObj => dispatch => {
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
