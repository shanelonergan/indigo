export default (state = {}, { type, payload }) => {
    switch (type) {

    case 'SET_TRANSACTION':
        return payload

    default:
        return state
    }
}
