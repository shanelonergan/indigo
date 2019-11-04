export default (state = { filters: [] }, { type, payload }) => {
    switch (type) {
        case 'SET_CATEGORIES':
            console.log(payload, 'getting filters');
            return { ...state, categories: payload };
        case 'SET_BRANDS':
            console.log(payload, 'getting filters');
            return { ...state, brands: payload };
        case 'SET_CONDITIONS':
            console.log(payload, 'getting filters');
            return { ...state, conditions: payload };
        case 'SET_MILLS':
            console.log(payload, 'getting filters');
            return { ...state, mills: payload };

        case 'SET_WASHES':
            console.log(payload, 'getting filters');
            return { ...state, washes: payload };

        default:
            return state;
    }
};
