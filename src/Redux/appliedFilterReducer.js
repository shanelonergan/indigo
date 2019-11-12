export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'SET_APPLIED_CATEGORIES':
            // console.log(payload, 'getting categories');
            return { ...state, categories: payload };
        case 'SET_APPLIED_BRANDS':
            // console.log(payload, 'getting brands');
            return { ...state, brands: payload };
        case 'SET_APPLIED_CONDITIONS':
            // console.log(payload, 'getting conditions');
            return { ...state, conditions: payload };
        case 'SET_APPLIED_MILLS':
            // console.log(payload, 'getting mills');
            return { ...state, mills: payload };

        case 'SET_APPLIED_WASHES':
            // console.log(payload, 'getting washes');
            return { ...state, washes: payload };

        default:
            return state;
    }
};

