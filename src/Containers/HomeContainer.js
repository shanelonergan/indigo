import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Button, Grid, Image, Stack, Text } from 'grommet';

const HomeContainer = () => {
    // TODO: refactor into one large grid
    let history = useHistory();
    const handleShop = () => {
        history.push('/listings');
    };
    const handleSell = () => {
        history.push('/listings/new');
    };

    const pantsSVG = () => {
        return (
            <svg
                width='100%'
                height='100%'
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
            >
                <path d='indigo/public/icons/jeans.svg' fill='#000' />
            </svg>
        );
    };

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
                        <Button
                            label='shop'
                            fill={true}
                            onClick={handleShop}
                            color='brand'
                            primary
                        />
                    </Box>
                    <Box justify='center' align='center' justify='center'>
                        <Button
                            label='sell'
                            fill={true}
                            onClick={handleSell}
                            color='brand'
                            primary
                        />
                    </Box>
                    <Box justify='center' align='center' justify='center'>
                        <Button
                            label='learn'
                            fill={true}
                            onClick={() => {}}
                            color='brand'
                            primary
                        />
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
                    <Stack anchor='center'>
                        <Box
                            align='center'
                            justify='center'
                            // background='brand'
                            height='medium'
                            justify='center'
                        >
                            <Image src='https://cache.mrporter.com/variants/images/4068790126428847/in/w2000_q80.jpg' />
                        </Box>
                        <Text color='control' size='xxlarge'>pants</Text>
                    </Stack>
                    <Stack anchor='center'>
                        <Box
                            align='center'
                            justify='center'
                            // background='brand'
                            height='medium'
                            justify='center'
                        >
                            <Image src='https://www.allenedmonds.com/on/demandware.static/-/Sites-allenedmonds-catalog/default/dwa6158513/images/2.1/accessories/jackets/Jacket_1015831_Civilianaire_Raw_Denim_Front_web.jpg' />
                        </Box>
                        <Text color='control' size='xxlarge'>jackets</Text>
                    </Stack>
                    <Stack anchor='center'>
                        <Box
                            align='center'
                            justify='center'
                            // background='brand'
                            height='medium'
                            justify='center'
                        >
                            <Image src='https://cache.mrporter.com/variants/images/5983760397903497/in/w2000_q80.jpg' />
                        </Box>
                        <Text color='brand' size='xxlarge'>shirts</Text>
                    </Stack>
                </Grid>
            </Box>
            <Box>
                <div>
                    footer
                </div>
            </Box>
        </Box>
    );
};

export default HomeContainer;
