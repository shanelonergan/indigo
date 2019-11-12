import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Grid, Text, Image, InfiniteScroll, Select, Button } from 'grommet';
import { ResizeSpinLoader } from 'react-css-loaders';
import { getAllListings } from '../Redux/actions/listingActions';
import { ListingPreview, FilterSelector } from '../Components/';
import { setCategoriesAction, setBrandsAction, setConditionsAction, setMillsAction, setWashesAction } from '../Redux/actions/appliedFilterActions'

const ShopContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let filteredListings = [];
    const listings = useSelector(state => state.listings.allListings);
    const [brandValues, setBrandValues] = useState('');
    const [categoryValues, setCategoryValues] = useState('');
    const [conditionValues, setConditionValues] = useState('');
    const [millValues, setMillValues] = useState('');
    const [washValues, setWashValues] = useState('');

    const appliedFilters = useSelector(state => state.appliedFilters)
    console.log(appliedFilters)

    const { brands, categories, conditions, mills, washes } = useSelector(
        state => state.filters
    );

    const [loaded, setLoaded] = useState(false);

    const [filters, setFilters] = useState({
        category_id: null,
        brand_id: '',
        waist: 30,
        length: 32,
        weight: 12,
        wash_id: null,
        mill_id: null,
        condition_id: null
    });

    if (brands && categories && conditions && mills && washes) {
        if (!loaded) {
            setLoaded(true);
        }
    }

    useEffect(() => {
        dispatch(getAllListings());
    }, []);

    const handleChange = event => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setFilters({
            ...filters,
            [event.target.name]: value
        });
    };

    useEffect(() => {
        if (brandValues) {
            const brandIds = brandValues.map(valueObj => valueObj.id)
            console.log(brandIds)
            dispatch(setBrandsAction(brandIds))
            setFilters({
                ...filters,
                brand_id: brandValues.map(valueObj => valueObj.id)
            });
        }
        if (categoryValues) {
            console.log('setting categorys');
            setFilters({
                ...filters,
                category_id: categoryValues.map(valueObj => valueObj.id)
            });
        }
        if (conditionValues) {
            console.log('setting conditions');
            setFilters({
                ...filters,
                condition_id: conditionValues.map(valueObj => valueObj.id)
            });
        }
        if (millValues) {
            console.log('setting mills');
            setFilters({
                ...filters,
                mill_id: millValues.map(valueObj => valueObj.id)
            });
        }
        if (washValues) {
            console.log('setting washes');
            setFilters({
                ...filters,
                wash_id: washValues.map(valueObj => valueObj.id)
            });
        }
    }, [brandValues, categoryValues, conditionValues, millValues, washValues]);

    const handleListing = event => {
        const listingId = event.target.parentNode.id;
        console.log(listingId);
        history.push(`/listings/${listingId}`);
    };

    const clearFilters = () => {
        setFilters({
        category_id: null,
        brand_id: '',
        waist: 30,
        length: 32,
        weight: 12,
        wash_id: null,
        mill_id: null,
        condition_id: null
        })

        setBrandValues('')
        setCategoryValues('')
        setConditionValues('')
        setMillValues('')
        setWashValues('')
    }

    const renderListings = () => {
        filteredListings = listings;

        const filterListings = (currentListings, filter) => {
            // debugger

            const intFilterIds = filters[filter + '_id'].map(stringFilterId =>
                parseInt(stringFilterId)
            );

            filteredListings = currentListings.filter(listing => {
                return intFilterIds.includes(listing[filter].id);
            });

            console.log(filteredListings);
        };

        if (filters.brand_id) {
            filterListings(filteredListings, 'brand');
            console.log('filtering by brand');
        }
        if (filters.category_id) {
            console.log('filtering by category');
            filterListings(filteredListings, 'category');
        }
        if (filters.condition_id) {
            console.log('filtering by condition');
            filterListings(filteredListings, 'condition');
        }
        if (filters.mill_id) {
            console.log('filtering by condition');
            filterListings(filteredListings, 'mill');
        }
        if (filters.wash_id) {
            console.log('filtering by condition');
            filterListings(filteredListings, 'wash');
        }


        return (
            <>
                <Box>filters</Box>
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
        <Grid
            fill
            rows={['auto', 'flex']}
            columns={['auto', 'flex']}
            areas={[
                { name: 'sidebar', start: [0, 1], end: [0, 1] },
                { name: 'main', start: [1, 1], end: [1, 1] }
            ]}
        >
            {loaded ? (
                <Box
                    gridArea='sidebar'
                    background='c2'
                    width='250px'
                    justify='center'
                    align='center'
                >

                    <FilterSelector
                        filterObj={brands}
                        setValues={setBrandValues}
                        values={brandValues}
                        name='brands'
                    />
                    <FilterSelector
                        filterObj={categories}
                        setValues={setCategoryValues}
                        values={categoryValues}
                        name='categories'
                    />
                    <FilterSelector
                        filterObj={conditions}
                        setValues={setConditionValues}
                        values={conditionValues}
                        name='conditions'
                    />
                    <FilterSelector
                        filterObj={mills}
                        setValues={setMillValues}
                        values={millValues}
                        name='mills'
                    />
                    <FilterSelector
                        filterObj={washes}
                        setValues={setWashValues}
                        values={washValues}
                        name='washes'
                    />

                    <Button onClick={clearFilters} size='small' label='clear filters' margin='small'/>

                </Box>
            ) : null}

            <Box
                gridArea='main'
                justify='center'
                align='center'
                overflow='scroll'
            >
                {listings ? (
                    renderListings()
                ) : (
                    <ResizeSpinLoader color='#00004D' />
                )}
            </Box>
        </Grid>
    );
};

export default ShopContainer;
