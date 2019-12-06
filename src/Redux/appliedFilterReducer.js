export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'SET_APPLIED_CATEGORIES':
            return { ...state, category_id: payload };
        case 'SET_APPLIED_BRANDS':
            return { ...state, brand_id: payload };
        case 'SET_APPLIED_CONDITIONS':
            return { ...state, condition_id: payload };
        case 'SET_APPLIED_MILLS':
            return { ...state, mill_id: payload };
        case 'SET_APPLIED_WASHES':
            return { ...state, wash_id: payload };
        case 'CLEAR_APPLIED_FILTERS':
            return {}
        default:
            return state;
    }
};

