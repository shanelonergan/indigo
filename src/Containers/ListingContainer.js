import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListing } from '../Redux/actions/listingActions';
import {
    Box,
    Image,
    Text
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

    const listing = useSelector(state => state.listing);
    console.log(listing);

    return (
        <Box size='medium'>
            { listing ?
            <>
            <Image src='https://images.garmentory.com/images/2574568/large/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464745' />
            <Text>{listing.brand.name}</Text>
            <Text>{listing.name}</Text>
            </>
            :
           'loading...'
            }
        </Box>
    );
};

export default ListingContainer;
