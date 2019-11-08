import React, {useEffect } from 'react';
import { Box, Image, Text } from 'grommet';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from "react-router-dom"
// import { getAllListings } from '../Redux/actions/listingActions';

const ListingPreview = ({listing, handleListing}) => {

    console.log(listing)

    return (
        <Box
            key={listing.id}
            as='article'
            pad='xsmall'
            onClick={handleListing}
            id={listing.id}
            listing={listing}
        >
            <Image src='https://images.garmentory.com/images/2574568/large/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464745' />
            <Text>{listing.brand.name}</Text>
            <Text>{listing.name}</Text>
        </Box>
    );
};

export default ListingPreview;
