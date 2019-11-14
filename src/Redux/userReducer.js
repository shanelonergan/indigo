export default (state = {}, { type, payload }) => {
    switch (type) {

    case 'SET_USER':
        console.log('set user')
        return payload
    case 'CLEAR_USER':
        console.log('clear user')
        return {}
    case 'SET_ERROR':
        console.log(payload)
        return { ...payload}
    default:
        return state
    }
}

