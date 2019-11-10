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


    // const [value, setValue] = useState("");


    const { brands, categories, conditions, mills, washes } = useSelector(
        state => state.filters
    );

    const [loaded, setLoaded] = useState(false);

    const [filters, setFilters] = useState({
        category_id: [1, 2],
        brand_id: [],
        waist: 30,
        length: 32,
        weight: 12,
        wash_id: [],
        mill_id: [],
        condition_id: []
    });

    if (brands && categories && conditions && mills && washes) {
        if (!loaded) {
            setLoaded(true);
        }

    }

    // if (listings) {

    // }

    console.log('filtered listings', filteredListings);

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

    const handleListing = event => {
        const listingId = event.target.parentNode.id;
        console.log(listingId);
        history.push(`/listings/${listingId}`);
    };

    const renderListings = () => {
        filteredListings = listings

        const filterListings = (currentListings, filter) => {
            // filteredListings.filter(listing => {
            //     debugger
            //       filters[filter + '_id'].includes(listing[filter].id)
            // })
            filters[filter + '_id'].forEach(filter_id => {
                // debugger
                filteredListings = currentListings.filter(listing => listing[filter].id === filter_id)
            })
        }

        // if (filters.category_id !== []){
            filterListings(filteredListings, 'category')
        // } else if (filters.category_id !== []){
            console.log(filteredListings)
        // }

    }

    if (listings) {
        renderListings()

    }

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
                    width='15vw'
                    justify='center'
                    align='center'
                >
                    {/* <Box fill align='center' justify='start' pad='large'>
                        <Select
                            size='medium'
                            placeholder='Select'
                            multiple
                            closeOnChange={false}
                            disabledKey='dis'
                            labelKey='name'
                            valueKey='id'
                            value={value}
                            options={filters}
                            onChange={({ value: nextValue }) =>
                                setValue(nextValue)
                            }
                            onClose={() => setFilters(filters)}
                            onSearch={text => {
                                // The line below escapes regular expression special characters:
                                // [ \ ^ $ . | ? * + ( )
                                const escapedText = text.replace(
                                    /[-\\^$*+?.()|[\]{}]/g,
                                    '\\$&'
                                );

                                Create the regular expression with modified value which
                                handles escaping special characters. Without escaping special
                                characters, errors will appear in the console
                                const exp = new RegExp(escapedText, 'i');
                                setOptions(
                                    objectOptions.filter(o => exp.test(o.lab))
                                );
                            }}
                        />
                    </Box> */}
                    <FilterSelector
                        handleChange={handleChange}
                        filterObj={brands}
                        name='brand'
                        setFilters={setFilters}
                        listings={listings}
                    />

                    <FilterSelector
                        handleChange={handleChange}
                        filterObj={categories}
                        name='category'
                    />

                    <FilterSelector
                        handleChange={handleChange}
                        filterObj={conditions}
                        name='condition'
                    />
                </Box>
            ) : null}

            <Box
                gridArea='main'
                justify='center'
                align='center'
                overflow='scroll'
            >
                {listings ? (
                    <>
                        <Box>filters</Box>
                        <Box fill>
                            <Grid
                                columns='15vw'
                                rows='25vh'
                                fill='horizontal'
                                align='center'
                            >
                                <InfiniteScroll items={listings} step={8}>
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
                ) : (
                    <ResizeSpinLoader color='#00004D' />
                )}
            </Box>
        </Grid>
    );
};

export default ShopContainer;
