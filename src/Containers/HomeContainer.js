import React, { useState } from 'react';

import {
    Box,
    Button,
    FormField,
    Heading,
    Layer,
    TextInput,
    Grid
} from 'grommet';
import LoginForm from '../Components/LoginForm';

const HomeContainer = () => {
    // TODO: refactor into one large grid
    return (
        <Box pad='small' gap='small' align='center' justify='center'>
            <Box pad='small'>
                <Grid
                    rows={['flex']}
                    columns={['31.37vw', '31.37vw', '31.37vw']}
                    gap='small'
                >
                    <Box
                        align='center'
                        justify='center'
                        background='brand'
                        height='xxsmall'
                        justify='center'
                    >
                        shop
                    </Box>
                    <Box
                        justify='center'
                        background='brand'
                        align='center'
                        justify='center'
                    >
                        sell
                    </Box>
                    <Box
                        justify='center'
                        background='brand'
                        align='center'
                        justify='center'
                    >
                        learn
                    </Box>
                </Grid>
            </Box>
            <Box pad='small'>
                <Box
                    background='brand'
                    pad='medium'
                    width='96vw'
                    height='medium'
                    align='center'
                    justify='center'
                >
                    spotlight
                </Box>
            </Box>
            <Box pad='small'>
                <Grid
                    rows={['flex']}
                    columns={['31.37vw', '31.37vw', '31.37vw']}
                    gap='small'
                    align='stretch'
                >
                    <Box
                        align='center'
                        justify='center'
                        background='brand'
                        height='small'
                        justify='center'
                    >
                        Categories
                    </Box>
                    <Box
                        justify='center'
                        background='brand'
                        align='center'
                        justify='center'
                    >
                        Categories
                    </Box>
                    <Box
                        justify='center'
                        background='brand'
                        align='center'
                        justify='center'
                    >
                        Categories
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomeContainer;
