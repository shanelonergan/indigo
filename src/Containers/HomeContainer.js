import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Button, Grid, Image, Stack, Text, Carousel } from 'grommet';

const HomeContainer = () => {
    // TODO: refactor into one large grid
    let history = useHistory();
    const handleShop = () => {
        history.push('/listings');
    };
    const handleSell = () => {
        history.push('/listings/new');
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
            <Box >
                <Box
                    // background='brand'
                    // pad='medium'
                    width='96vw'
                    height='auto'
                    align='center'
                    justify='around'
                    direction='column'
                >
                    <Box>
                        <Text size='xxlarge' color='brand'>
                            Featured collections:
                        </Text>
                    </Box>
                    <Box direction='row'>
                        <Box
                            height='medium'
                            width='large'
                            overflow='hidden'
                            margin='small'
                        >
                            <Stack anchor='center'>
                                <Carousel fill>
                                    <Image
                                        fit='cover'
                                        src='https://i.pinimg.com/originals/c8/33/e7/c833e7442bcd0547f69ee3353bad4c85.jpg'
                                    />
                                    <Image
                                        fit='cover'
                                        src='https://i.pinimg.com/originals/2f/c3/ea/2fc3eaf30218381402388b15536a3249.jpg'
                                    />
                                    <Image
                                        fit='cover'
                                        src='https://i.pinimg.com/originals/82/12/73/821273bc6c2f54f6fa5e55060c4314e1.jpg'
                                    />
                                </Carousel>
                                <Text weight='bold' color='focus' size='10vw'>
                                    Kuroki Mills
                                </Text>
                            </Stack>
                        </Box>
                        <Box
                            height='medium'
                            width='large'
                            overflow='hidden'
                            margin='small'
                        >
                            <Stack anchor='center'>
                                <Carousel fill>
                                    <Image
                                        fit='cover'
                                        src='https://i2.wp.com/auntay.com/wp-content/uploads/2018/01/20180119-DSCF6843-2-e1525548321456.jpg?ssl=1'
                                    />
                                    <Image
                                        fit='cover'
                                        src='//v2.grommet.io/assets/IMG_4245.jpg'
                                    />
                                    <Image
                                        fit='cover'
                                        src='//v2.grommet.io/assets/IMG_4210.jpg'
                                    />
                                </Carousel>
                                <Text weight='bold' color='focus' size='10vw'>
                                    3Sixteen
                                </Text>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box pad={{'right':'small', 'left':'small'}} direction='column' height='auto'
                    align='center'>
                <Box>
                    <Text size='xxlarge' color='brand'>
                        Shop by category:
                    </Text>
                </Box>

                <Grid
                    rows={['flex']}
                    columns={['31.37vw', '31.37vw', '31.37vw']}
                    gap='small'
                    align='stretch'
                >
                    <Stack
                        anchor='center'
                        onClick={() => {
                            history.push('/listings/pants');
                        }}
                    >
                        <Box
                            align='center'
                            justify='center'
                            // background='brand'
                            height='medium'
                            justify='center'
                        >
                            <Image src='https://cdn.shopify.com/s/files/1/0070/1922/products/LINEN_JEANS_SLIM_1024x1024.jpg?v=1547508728' />
                        </Box>
                        <Text color='white' size='xxlarge'>
                            pants
                        </Text>
                    </Stack>
                    <Stack
                        anchor='center'
                        onClick={() => {
                            history.push('/listings/shirts');
                        }}
                    >
                        <Box
                            align='center'
                            justify='center'
                            // background='brand'
                            height='medium'
                            justify='center'
                        >
                            <Image src='https://www.urbanrider.co.uk/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/r/o/rokker-denim-rider-shirt-raw-main.jpg' />
                        </Box>
                        <Text color='white' size='xxlarge'>
                            shirts
                        </Text>
                    </Stack>
                    <Stack
                        anchor='center'
                        onClick={() => {
                            history.push('/listings/jackets');
                        }}
                    >
                        <Box
                            align='center'
                            justify='center'
                            // background='brand'
                            height='medium'
                            justify='center'
                        >
                            <Image src='https://media.endclothing.com/media/catalog/product/0/6/06-07-2015_apc_rawdenimjacket_indigo_1_jtl.jpg' />
                        </Box>
                        <Text color='white' size='xxlarge'>
                            jackets
                        </Text>
                    </Stack>
                </Grid>
            </Box>
            <Box>
                <div>footer</div>
            </Box>
        </Box>
    );
};

export default HomeContainer;
