export default (state = {}, { type, payload }) => {
    switch (type) {

    case GET_FILTERS:
        return payload

    default:
        return state
    }
}
