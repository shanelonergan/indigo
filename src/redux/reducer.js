const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_USER':
        return payload

    case 'GET_USER':
        return {}

    default:
        return state
    }
}
