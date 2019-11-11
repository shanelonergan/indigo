import React from 'react';
import { useHistory } from "react-router-dom"

import {
    Box,
    Button,
    Grid
} from 'grommet';


const HomeContainer = () => {
    // TODO: refactor into one large grid
    let history = useHistory()
    const  handleShop = () => {
        history.push('/listings')
    }
    const  handleSell = () => {
        history.push('/listings/new')
    }

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
                        height='xxsmall'
                        justify='center'
                    >
                        <Button label='shop' fill={true} onClick={handleShop} color='brand' primary/>

                    </Box>
                    <Box
                        justify='center'
                        align='center'
                        justify='center'
                    >
                        <Button label='sell' fill={true} onClick={handleSell} color='brand' primary/>
                    </Box>
                    <Box
                        justify='center'
                        align='center'
                        justify='center'
                    >
                        <Button label='learn' fill={true} onClick={() => {}} color='brand' primary/>
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
                        pants
                    </Box>
                    <Box
                        justify='center'
                        background='brand'
                        align='center'
                        justify='center'
                    >
                        jackets
                    </Box>
                    <Box
                        justify='center'
                        background='brand'
                        align='center'
                        justify='center'
                    >
                        shirts
                    </Box>
                </Grid>
            </Box>
            <Box>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </Box>
        </Box>
    );
};

export default HomeContainer;
