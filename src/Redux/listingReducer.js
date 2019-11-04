export default (state = {}, { type, payload }) => {
    switch (type) {

    case 'CREATE_LISTING':
        return { ...state, ...payload }

    default:
        return state
    }
}
