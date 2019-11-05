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
import { getAllListings } from '../Redux/actions/listingActions';

const ShopContainer = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const listings = useSelector(state => state.listings);
    // debugger

    useEffect(() => {
        dispatch(getAllListings());
    }, []);

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
                            <Box key={item.id} as='article' pad='xsmall' onClick={handleListing} id={item.id} listing={item}>
                                <Image src='https://images.garmentory.com/images/2574568/large/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464745' />
                                <Text>{item.brand.name}</Text>
                                <Text>{item.name}</Text>
                            </Box>
                        )}
                    </InfiniteScroll>
                    : <Text>Loading</Text>}
                </Grid>
            </Box>
        </Grid>
    );
};

export default ShopContainer;
