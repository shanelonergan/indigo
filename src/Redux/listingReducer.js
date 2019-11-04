export default (state = [], { type, payload }) => {
    switch (type) {
        case 'CREATE_LISTING':
            return { ...state, ...payload };
        case 'SET_ALL_LISTINGS':
            console.log(payload, 'setting listings');
            return [ ...payload ];

        default:
            console.log('default')
            return state;
    }
};
