import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"
import {
    Box,
    Grid,
    Text,
    Image,
    InfiniteScroll
} from 'grommet';
import { ResizeSpinLoader } from 'react-css-loaders';
import { getAllListings } from '../Redux/actions/listingActions';
import ListingPreview from '../Components/ListingPreview';

const ShopContainer = () => {
    const listings = useSelector(state => state.listings.allListings);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllListings());
    }, []);
    const history = useHistory()
    // debugger

    const handleListing = (event) => {
        const listingId = event.target.parentNode.id
        history.push(`/listings/${listingId}`)
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
            <Box gridArea='sidebar' background='c2' width='small'>
              filters go here

            </Box>

            <Box gridArea='main' justify='center' align='center'>
                <Grid columns='xsmall' rows='small'>
                    {listings ?
                    <InfiniteScroll items={listings} step={8}>
                        {item => (

                            <ListingPreview listing={item} handleListing={handleListing}/>

                        )}
                    </InfiniteScroll>
                    : <ResizeSpinLoader color='#00004D'/>}
                </Grid>
            </Box>
        </Grid>
    );
};

export default ShopContainer;
