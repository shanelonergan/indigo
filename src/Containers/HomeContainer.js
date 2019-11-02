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
    return (
        <Box pad='small' gap='small' align='center' justify='center'>
            <Box>
                <Grid
                    rows={['flex']}
                    columns={['small', 'small', 'small']}
                    gap='small'
                >
                    <Button label='shop' fill onClick={() => {}} />
                    <Button label='sell' fill onClick={() => {}} />
                    <Button label='learn' fill onClick={() => {}} />
                </Grid>
            </Box>
            <Box>
                <Box
                    background='brand'
                    pad='medium'
                    width='large'
                    height='medium'
                    align='center'
                    justify='center'
                >
                    spotlight
                </Box>
            </Box>
            <Box>
                <Grid
                    rows={['flex']}
                    columns={['small', 'small', 'small']}
                    gap='small'
                >
                    <Box align='center' justify='center'>
                        Categories
                    </Box>
                    <Box align='center' justify='center'>
                        Categories
                    </Box>
                    <Box align='center' justify='center'>
                        Categories
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomeContainer;
