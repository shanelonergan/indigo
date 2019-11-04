export default (state = {}, { type, payload }) => {
    switch (type) {

    case 'CREATE_LISTING':
        return { ...state, ...payload }
    case 'SET_ALL_LISTINGS':
        return {...state, listings: payload}

    default:
        return state
    }
}
