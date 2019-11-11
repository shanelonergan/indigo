// ==> REDUX ACTIONS \\
const setCategoriesAction = filterIds => ({
    type: 'SET_CATEGORIES',
    payload: filterIds
});

const setBrandsAction = filterIds => ({
    type: 'SET_BRANDS',
    payload: filterIds
})

const setConditionsAction = filterIds => ({
    type: 'SET_CONDITIONS',
    payload: filterIds
})

const setMillsAction = filterIds => ({
    type: 'SET_MILLS',
    payload: filterIds
})

const setWashesAction = filterIds => ({
    type: 'SET_WASHES',
    payload: filterIds
})

export {setCategoriesAction, setBrandsAction, setConditionsAction, setMillsAction, setWashesAction}
