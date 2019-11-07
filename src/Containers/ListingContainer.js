import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { getListing } from '../Redux/actions/listingActions';
import { Stripe, Transaction, Favorite } from 'grommet-icons';
import { Box, Image, Text, Button, Carousel } from 'grommet';
import { ResizeSpinLoader } from 'react-css-loaders';

const CHARGES_URL = 'http://localhost:3000/charges';

const ListingContainer = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const urlArr = window.location.href.split('/');
        const listingId = urlArr[4];
        dispatch(getListing(listingId));
    }, []);

    const listing = useSelector(state => state.listings.currentListing);

    const onToken = token => {
        console.log(token);
        createCharge(token);
    };

    const createCharge = async token => {
        // TODO: Create a transaction to store history in database

        const charge = {
            token: token.id
        };
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ charge: charge })
        };

        let response = await fetch(CHARGES_URL, config);
        // .then(res => res.json())
        // .then(console.log)
        if (response.ok) console.log('purchase complete!');

        // Transaction.create()
    };

    return (
        <>
            <Box size='medium' direction='row'>
                {listing ? (
                    <>
                        <Box
                            margin='small'
                            responsive={true}
                            height='80vh'
                            width='37vw'
                            overflow='hidden'
                        >
                            <Carousel>
                                <Image
                                    fit='cover'
                                    src='https://images.garmentory.com/images/2574568/large/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464745'
                                />
                                <Image
                                    fit='cover'
                                    src='https://images1.garmentory.com/images/2574569/xxl/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464746'
                                />
                            </Carousel>
                        </Box>
                        <Box
                            border={{ color: 'brand', size: 'medium' }}
                            margin='small'
                            pad='small'
                            responsive={true}
                            align='center'
                            // justify='center'
                            height='80vh'
                            width='large'
                        >
                            <Box direction='column' >
                                <Box>
                                    <Text
                                        color='brand'
                                        weight='bold'
                                        margin='small'
                                    >
                                        {listing.brand.name}
                                    </Text>
                                    <Text margin='small'>{listing.name}</Text>
                                    <Text margin='small'>
                                        wash: {listing.wash.name}
                                    </Text>
                                    <Text margin='small'>
                                        mill: {listing.mill.name}
                                    </Text>
                                    <Text margin='small'>
                                        condition: {listing.condition.name}
                                    </Text>
                                    <Text margin='small' color='red'>
                                        $ {listing.price}
                                    </Text>

                                    <StripeCheckout
                                        stripeKey='pk_test_LEfFcUQR5pRWI12plUR9V4Rq00MrKBR0Bg'
                                        amount={listing.price * 100} //stripe price is in cents
                                        currency='USD'
                                        token={onToken}
                                        panelLabel='Purchase for {{amount}}'
                                        ComponentClass='div'
                                        name='indigo'
                                        shippingAddress
                                    >
                                        <Button
                                            icon={<Stripe />}
                                            label='Purchase'
                                            margin={{ right: 'medium' }}
                                            primary
                                        />
                                        <Favorite />
                                    </StripeCheckout>
                                </Box>
                                <Box direction='column'margin={{'top':'medium'}}>
                                <Text color='brand'
                                        weight='bold'
                                        margin='small'>listed by:</Text>
                                    <Box direction='row'>
                                    <Box height='xsmall' width='xsmall' margin={{'right':'small'}}>
                                        <Image
                                            // round='medium'
                                            fit='cover'
                                            src={listing.user.img_url}
                                        />
                                    </Box>
                                    <Box justify='center'>

                                    <Text>{listing.user.username}</Text>
                                    <Text>{listing.user.location}</Text>
                                    </Box>

                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </>
                ) : (
                    <ResizeSpinLoader />
                )}
            </Box>
            {/* <Box size='medium'></Box> */}
        </>
    );
};

export default ListingContainer;
