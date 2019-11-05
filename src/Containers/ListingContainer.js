import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListing } from '../Redux/actions/listingActions';
import {
    Box,
    Image,
    Text,
    Grid
    // Form,
    // FormField,
    // RadioButtonGroup,
} from 'grommet';

const ListingContainer = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const urlArr = window.location.href.split('/');
        const listingId = urlArr[4];
        dispatch(getListing(listingId));
    }, []);

    const listing = useSelector(state => state.listings.currentListing);
    console.log(listing);

    return (
        <Box size='medium' direction='row'>
            {listing ? (
                <>
                <Box margin='small'>
                    <Image src='https://images.garmentory.com/images/2574568/large/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464745' />
                </Box>
                <Box border={{'color':'brand', 'size':'medium'}} margin='small' pad='small' responsive='true' align='center' justify='center'>
                    <Text>{listing.brand.name}</Text>
                    <Text>{listing.name}</Text>
                    <Text>wash: {listing.wash.name}</Text>
                    <Text>mill: {listing.mill.name}</Text>
                    <Text>condition: {listing.condition.name}</Text>
                </Box>
                </>
            ) : (
                'loading...'
            )}
        </Box>
    );
};

export default ListingContainer;
