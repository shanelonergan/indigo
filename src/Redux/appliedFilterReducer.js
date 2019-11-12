export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'SET_APPLIED_CATEGORIES':
            // console.log(payload, 'getting categories');
            return { ...state, category_id: payload };
        case 'SET_APPLIED_BRANDS':
            // console.log(payload, 'getting brands');
            return { ...state, brand_id: payload };
        case 'SET_APPLIED_CONDITIONS':
            // console.log(payload, 'getting conditions');
            return { ...state, condition_id: payload };
        case 'SET_APPLIED_MILLS':
            // console.log(payload, 'getting mills');
            return { ...state, mill_id: payload };

        case 'SET_APPLIED_WASHES':
            // console.log(payload, 'getting washes');
            return { ...state, wash_id: payload };

        case 'CLEAR_APPLIED_FILTERS':
            return {}

        default:
            return state;
    }
};

