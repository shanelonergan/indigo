// ==> API CONSTANTS <== \\
const BASE_URL = 'http://localhost:3000';
const USERS_URL = BASE_URL + '/users';
const PERSIST_URL = BASE_URL + '/persist';
const LOGIN_URL = BASE_URL + '/login';
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

// ==> REDUX ACTIONS \\
const setUserAction = userObj => ({
  type: 'SET_USER',
  payload: userObj
});

const clearUserAction = () => ({
  type: 'CLEAR_USER'
});

// ==> FETCH <== \\

const createUser = userObj => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  };

  fetch(USERS_URL, config)
    .then(res => res.json())
    .then(userObj => {
      console.log(userObj, "create user")
      dispatch(setUserAction(userObj.user));
      localStorage.setItem('token', userObj.token);
    });
};

const deleteUser = userId => dispatch => {
  const config = {
    method: 'DELETE'
  };

  fetch(SPECIFIC_USER_URL(userId), config)
  .then(res => {
    dispatch(clearUserAction());
    localStorage.clear();
    console.log('deleted user')
  });
};

const loginUser = userCredentials => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  };
  fetch(LOGIN_URL, config)
    .then(res => res.json())
    .then(userObj => {
      console.log(userObj)
      if (userObj.error) {
        console.log(userObj.error)
        localStorage.setItem('error', userObj.error)
      } else {
        dispatch(setUserAction(userObj.user));
        localStorage.clear()
        localStorage.setItem('token', userObj.token);
      }
    });
};

const persistUser = () => dispatch => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `bearer ` + localStorage.token
    }
  };
  fetch(PERSIST_URL, config)
    .then(res => res.json())
    .then(userObj => {
        console.log(userObj)
      dispatch(setUserAction(userObj));
    });
};

const logoutUser = () => dispatch => {
  console.log("logging out")
  dispatch(clearUserAction());
  localStorage.clear();
};

export {
  createUser,
  deleteUser,
  loginUser,
  persistUser,
  logoutUser
};
