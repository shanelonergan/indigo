// ==> REDUX ACTIONS \\
const setCategoriesAction = filterIds => ({
    type: 'SET_APPLIED_CATEGORIES',
    payload: filterIds
});

const setBrandsAction = filterIds => {
    console.log(filterIds)
    return {
    type: 'SET_APPLIED_BRANDS',
    payload: filterIds
}}

const setConditionsAction = filterIds => ({
    type: 'SET_APPLIED_CONDITIONS',
    payload: filterIds
})

const setMillsAction = filterIds => ({
    type: 'SET_APPLIED_MILLS',
    payload: filterIds
})

const setWashesAction = filterIds => ({
    type: 'SET_APPLIED_WASHES',
    payload: filterIds
})

const clearAppliedFiltersAction = () => ({
    type: 'CLEAR_APPLIED_FILTERS'
})

export {setCategoriesAction, setBrandsAction, setConditionsAction, setMillsAction, setWashesAction, clearAppliedFiltersAction}
