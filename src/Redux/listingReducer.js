export default (state = [], { type, payload }) => {
    switch (type) {
        case 'CREATE_LISTING':
            return { ...state, ...payload };
        case 'SET_ALL_LISTINGS':
            console.log(payload, 'setting listings');
            return [ ...payload ];
        case 'SET_LISTING':
            return {...state, listing: payload}

        default:
            console.log('default')
            return state;
    }
};
