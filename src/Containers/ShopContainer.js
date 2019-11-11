import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box, Grid, Text, Image, InfiniteScroll, Select } from 'grommet';
import { ResizeSpinLoader } from 'react-css-loaders';
import { getAllListings } from '../Redux/actions/listingActions';
import { ListingPreview, FilterSelector } from '../Components/';


const ShopContainer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let filteredListings = [];
    const listings = useSelector(state => state.listings.allListings);
    const [brandValues, setBrandValues] = useState("");

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
        if(brandValues) {
            console.log('setting brands')
            setFilters({
                ...filters,
                brand_id: brandValues.map(valueObj => valueObj.id)
            })
        }

    }, [brandValues])

    const handleListing = event => {
        const listingId = event.target.parentNode.id;
        console.log(listingId);
        history.push(`/listings/${listingId}`);
    };

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

        console.log(filteredListings);

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

                        <Select
                            size='small'
                            margin='small'
                            placeholder='brands'
                            multiple
                            closeOnChange={false}
                            disabledKey='dis'
                            labelKey='name'
                            valueKey='id'
                            value={brandValues}
                            options={brands}
                            onChange={({ value: nextValue }) => {
                                // setValue(...value, nextValue[0].id)
                                setBrandValues(nextValue)

                            }}
                            // onClose={() => setFilters(filters)}
                        />

                    <FilterSelector
                        // handleChange={handleChange}
                        filterObj={brands}
                        // name='brand'
                        setValues={setBrandValues}
                        values={brandValues}
                    />

                    {/* <FilterSelector
                        handleChange={handleChange}
                        filterObj={categories}
                        name='category'
                    />

                    <FilterSelector
                        handleChange={handleChange}
                        filterObj={conditions}
                        name='condition'
                    />
                    <FilterSelector
                        handleChange={handleChange}
                        filterObj={mills}
                        name='mill'
                    />
                    <FilterSelector
                        handleChange={handleChange}
                        filterObj={washes}
                        name='wash'
                    /> */}
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
