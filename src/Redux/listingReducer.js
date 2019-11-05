export default (state = [], { type, payload }) => {
    switch (type) {
        case 'CREATE_LISTING':
            return { ...state, ...payload };
        case 'SET_ALL_LISTINGS':
            console.log(payload, 'setting listings');
            return {...state, allListings: [ ...payload ]};
        case 'SET_LISTING':
            // console.log(payload, 'setting listing')
            return {...state, currentListing: payload}

        default:
            console.log('default')
            return state;
    }
};
