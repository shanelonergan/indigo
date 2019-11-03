export default (state = {}, { type, payload }) => {
    switch (type) {

    case 'SET_FILTERS':
        console.log('getting filters')
        return {...state, payload }

    default:
        return state
    }
}
