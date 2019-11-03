export default (state = {}, { type, payload }) => {
    switch (type) {

    case SET_FILTERS:
        return {...state, payload }

    default:
        return state
    }
}
