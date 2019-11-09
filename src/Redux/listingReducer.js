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
        case 'SET_LISTINGS_CATEGORY':
        case 'SET_LISTINGS_BRANDS':
        case 'SET_LISTINGS_CONDITIONS':
        case 'SET_LISTINGS_MILL':
        case 'SET_LISTINGS_WASH':

        default:
            console.log('default')
            return state;
    }
};
