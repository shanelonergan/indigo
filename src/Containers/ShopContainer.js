import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Box,
    Grid,
    Text,
    RangeSelector,
    Stack,
    Image,
    InfiniteScroll
} from 'grommet';
import { getAllListings } from '../Redux/actions/listingActions';

const ShopContainer = () => {
    // const [range, setRange] = useState([30, 32]);

    // const onChange = values => {
    //     setRange(values);
    // };

    const dispatch = useDispatch();
    const listings = useSelector(state => state.listings);
    // debugger

    useEffect(() => {
        dispatch(getAllListings());
    }, []);

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
                {/* <Stack>
                    <Box direction='column' justify='between'>
                        {[
                            26,
                            27,
                            28,
                            29,
                            30,
                            31,
                            32,
                            33,
                            34,
                            35,
                            36,
                            37,
                            38
                        ].map(value => (
                            <Box
                                key={value}
                                width='xxsmall'
                                height='xxsmall'
                                align='center'
                                pad='small'
                                border={false}
                            >
                                <Text style={{ fontFamily: 'monospace' }}>
                                    {value}
                                </Text>
                            </Box>
                        ))}
                    </Box>
                    <RangeSelector
                        direction='vertical'
                        min={26}
                        max={40}
                        size='string'
                        round='medium'
                        values={range}
                        onChange={onChange}
                    />
                </Stack> */}
            </Box>

            <Box gridArea='main' justify='center' align='center'>
                <Grid columns='xsmall' rows='small'>
                    {listings ?
                    <InfiniteScroll items={listings} step={8}>
                        {item => (
                            <Box key={item.id} as='article' pad='xsmall'>
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
