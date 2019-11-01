// ==> API CONSTANTS <== \\
const BASE_URL = 'http://localhost:3000'
const USERS_URL = BASE_URL + '/users'
const PERSIST_URL = BASE_URL + '/persist'
const LOGIN_URL = BASE_URL + '/login'
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id

// ==> Redux Actions \\
const setUserAtion = userObj => ({
    type: 'SET_USER',
    payload: userObj
})

const clearUserAction = () => ({
    type: 'CLEAR_USER'

})

