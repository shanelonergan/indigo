// -> IMPORTS <- \\
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Grid,
    Text,
    Image,
    InfiniteScroll,
    Select,
    Button
} from 'grommet';
import { ResizeSpinLoader } from 'react-css-loaders';
import { getAllListings } from '../Redux/actions/listingActions';
import { ListingPreview, FilterSelector } from '../Components/';
import {
    setCategoriesAction,
    setBrandsAction,
    setConditionsAction,
    setMillsAction,
    setWashesAction,
    clearAppliedFiltersAction
} from '../Redux/actions/appliedFilterActions';

// -> COMPONENT <- \\
const ShopContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const queryString = require('query-string')
    let filteredListings = [];

    // -> URL VARIABLES
    const urlArr = window.location.href.split('/');
    const slug = urlArr[4];
    const searchParamsString = urlArr[3].split('=')[1]
    let searchParamsArr = []
    let searchPhrase = ''
    if (searchParamsString) {
        searchParamsArr = searchParamsString.split('+')
        searchPhrase = searchParamsArr.join(' ')
    }

    // -> REDUX STATE <- \\
    const { brands, categories, conditions, mills, washes } = useSelector(state => state.filters);
    const listings = useSelector(state => state.listings.allListings);
    const appliedFilters = useSelector(state => state.appliedFilters);
    const loggedInUser = useSelector(state => state.user)

    // -> LOCAL STATE <- \\
    const [brandValues, setBrandValues] = useState('');
    const [categoryValues, setCategoryValues] = useState('');
    const [conditionValues, setConditionValues] = useState('');
    const [millValues, setMillValues] = useState('');
    const [washValues, setWashValues] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [favorites, setFavorites] = useState('')

    if (listings && !favorites && slug ==='favorites') {
        const favArr = listings.filter(listing => {
            const allFavorites = listing.favorites.all;
            const favoriteUserIds = allFavorites.map(favorite => favorite.user_id);
            console.log(favoriteUserIds)
            return favoriteUserIds.includes(loggedInUser.id);
        })
        setFavorites(favArr)
    }

    // -> LOGS <- \\
    console.log(favorites);
    console.log(appliedFilters);
    console.log(slug);
    console.log(searchPhrase)

    if (brands && categories && conditions && mills && washes) {
        if (!loaded) {
            setLoaded(true);
        }
        if (slug === 'pants') {
            if (!appliedFilters.category_id) {
                dispatch(setCategoriesAction([1]));
            }
        }
        if (slug === 'shirts') {
            if (!appliedFilters.category_id) {
                dispatch(setCategoriesAction([3]));
            }
        }
        if (slug === 'jackets') {
            if (!appliedFilters.category_id) {
                dispatch(setCategoriesAction([2]));
            }
        }
        if (searchPhrase === 'Kuroki Mills') {
            if (!appliedFilters.mill_id) {
                dispatch(setMillsAction([[2]]))
            }
        }
        if (searchPhrase === '3sixteen') {
            if (!appliedFilters.brand_id) {
                dispatch(setBrandsAction([[3]]))
            }
        }

    }

    useEffect(() => {
        dispatch(getAllListings());
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (brandValues) {
            const brandIds = brandValues.map(valueObj => valueObj.id);
            dispatch(setBrandsAction(brandIds));

        }
        if (categoryValues) {
            const categoryIds = categoryValues.map(valueObj => valueObj.id);
            dispatch(setCategoriesAction(categoryIds));
            console.log('setting categorys');

        }
        if (conditionValues) {
            const conditionIds = conditionValues.map(valueObj => valueObj.id);
            dispatch(setConditionsAction(conditionIds));
            console.log('setting conditions');

        }
        if (millValues) {
            const millIds = millValues.map(valueObj => valueObj.id);
            dispatch(setMillsAction(millIds));
            console.log('setting mills');

        }
        if (washValues) {
            const washIds = washValues.map(valueObj => valueObj.id);
            dispatch(setBrandsAction(washIds));
            console.log('setting washes');

        }
    }, [brandValues, categoryValues, conditionValues, millValues, washValues]);

    const handleListing = event => {
        const listingId = event.target.parentNode.id;
        console.log(listingId);
        history.push(`/listings/${listingId}`);
    };

    const clearFilters = () => {

        dispatch(clearAppliedFiltersAction());

        setBrandValues('');
        setCategoryValues('');
        setConditionValues('');
        setMillValues('');
        setWashValues('');
        setFavorites('')
        history.push('/listings');
    };

    const renderListings = () => {
        if (favorites) {
            filteredListings = favorites
        } else {
            filteredListings = listings;
        }

        const filterListings = (currentListings, filter) => {
            // debugger

            const intFilterIds = appliedFilters[filter + '_id'].map(
                stringFilterId => parseInt(stringFilterId)
            );

            filteredListings = currentListings.filter(listing => {
                return intFilterIds.includes(listing[filter].id);
            });

            console.log(filteredListings);
        };

        if (appliedFilters.brand_id) {
            filterListings(filteredListings, 'brand');
            console.log('filtering by brand');
        }
        if (appliedFilters.category_id) {
            console.log('filtering by category');
            filterListings(filteredListings, 'category');
        }
        if (appliedFilters.condition_id) {
            console.log('filtering by condition');
            filterListings(filteredListings, 'condition');
        }
        if (appliedFilters.mill_id) {
            console.log('filtering by condition');
            filterListings(filteredListings, 'mill');
        }
        if (appliedFilters.wash_id) {
            console.log('filtering by condition');
            filterListings(filteredListings, 'wash');
        }

        return (
            <>
                {/* <Box>filters</Box> */}
                <Box fill>
                    <Grid
                        columns='15vw'
                        rows='25vh'
                        fill='horizontal'
                        align='center'
                    >
                        <InfiniteScroll items={filteredListings} step={8}>
                            {item => (
                                <ListingPreview
                                    key={item.id}
                                    listing={item}
                                    handleListing={handleListing}
                                />
                            )}
                        </InfiniteScroll>
                    </Grid>
                </Box>
            </>
        );
    };

    return (
        <Box fill>
            {loaded ? (
                <Grid
                    fill={true}

                    rows={['auto', 'flex']}
                    columns={['auto', 'flex']}
                    areas={[
                        { name: 'sidebar', start: [0, 1], end: [0, 1] },
                        { name: 'main', start: [1, 1], end: [1, 1] }
                    ]}

                >
                    <Box
                        gridArea='sidebar'
                        flex='grow'
                        background='c2'
                        width='250px'
                        height='100vh'
                        justify='center'
                        align='center'
                    >
                        <FilterSelector
                            filterObj={brands}
                            setValues={setBrandValues}
                            values={brandValues}
                            name='brands'
                            multiple={true}
                        />
                        <FilterSelector
                            filterObj={categories}
                            setValues={setCategoryValues}
                            values={categoryValues}
                            name='categories'
                            multiple={true}
                        />
                        <FilterSelector
                            filterObj={conditions}
                            setValues={setConditionValues}
                            values={conditionValues}
                            name='conditions'
                            multiple={true}
                        />
                        <FilterSelector
                            filterObj={mills}
                            setValues={setMillValues}
                            values={millValues}
                            name='mills'
                            multiple={true}
                        />
                        <FilterSelector
                            filterObj={washes}
                            setValues={setWashValues}
                            values={washValues}
                            name='washes'
                            multiple={true}
                        />

                        <Button
                            onClick={clearFilters}
                            size='small'
                            label='clear filters'
                            margin='small'
                        />
                    </Box>

                    <Box
                        gridArea='main'
                        justify='center'
                        align='center'
                    >
                        {listings ? renderListings() : null}
                    </Box>
                </Grid>
            ) : (
                <Box justify='center' align='center' height='100vh'>
                    <ResizeSpinLoader color='#00004D' />
                </Box>
            )}
        </Box>
    );
};

export default ShopContainer;
