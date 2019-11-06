import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { getListing } from '../Redux/actions/listingActions';
import { createCharge } from '../Redux/actions/transactionActions';
import { Shop } from 'grommet-icons';
import {
    Box,
    Image,
    Text,
    Button
    // Form,
    // FormField,
    // RadioButtonGroup,
} from 'grommet';
import { ResizeSpinLoader } from 'react-css-loaders';

const ListingContainer = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        const urlArr = window.location.href.split('/');
        const listingId = urlArr[4];
        dispatch(getListing(listingId));
        dispatch(createCharge());
    }, []);

    const listing = useSelector(state => state.listings.currentListing);
    const transaction = useSelector(state => state.transaction);

    const onBuy = () => {
        // console.log('buying')
        // dispatch(createCharge())
        // props.stripe.redirectToCheckout({
        //     sessionId: transaction.id,
        // }).then(result => console.log(result))
    };

    const onToken = () => {
        dispatch(createCharge())
    }

    return (
        <>
            <Box size='medium' direction='row'>
                {listing ? (
                    <>
                        <Box margin='small' responsive={true}>
                            <Image src='https://images.garmentory.com/images/2574568/large/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464745' />
                        </Box>
                        <Box
                            border={{ color: 'brand', size: 'medium' }}
                            margin='small'
                            pad='small'
                            responsive={true}
                            align='center'
                            justify='center'
                        >
                            <Text color='brand' weight='bold' margin='small'>
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
                            <Button
                                size='medium'
                                fill='horizontal'
                                a11yTitle='purchase this item'
                                color='brand'
                                primary
                                onClick={onBuy}
                                icon={<Shop />}
                                label='purchase this item'
                            />
                            <StripeCheckout
                                stripeKey='pk_test_LEfFcUQR5pRWI12plUR9V4Rq00MrKBR0Bg'
                                token={onToken}
                            />
                        </Box>
                    </>
                ) : (
                    <ResizeSpinLoader />
                )}
            </Box>
            <Box size='medium'></Box>
        </>
    );
};

export default ListingContainer;
