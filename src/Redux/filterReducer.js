export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'SET_CATEGORIES':
            return { ...state, categories: payload };
        case 'SET_BRANDS':
            return { ...state, brands: payload };
        case 'SET_CONDITIONS':
            return { ...state, conditions: payload };
        case 'SET_MILLS':
            return { ...state, mills: payload };
        case 'SET_WASHES':
            return { ...state, washes: payload };
        default:
            return state;
    }
};
