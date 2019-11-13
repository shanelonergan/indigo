import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Cart, User, Login, Search, Favorite } from 'grommet-icons';
import { Box, Button, Heading, Image, DropButton } from 'grommet';

const NavBar = ({
    onOpenLogIn,
    showSidebar,
    setShowSidebar,
    showUserInfo,
    setShowUserInfo
}) => {
    const loggedInUser = useSelector(state => state.user);

    const history = useHistory();

    const handleFavorites = () => history.push('/listings/favorites');

    const handleHome = () => history.push('/');

    return (
        <Box
            tag='header'
            direction='row'
            align='center'
            justify='between'
            background='brand'
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation='medium'
            style={{ zIndex: '1' }}
            resposive={true}
        >
            <Heading
                level='3'
                margin='none'
                onClick={handleHome}
                responsive={true}
                direction='row'
            >
                indigo
            </Heading>

            <DropButton
                icon={<Search />}
                label='search'
                gap='5vw'
                onClick={() => {}}
                margin={{ left: 'small' }}
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={<Box pad='large' background='light-2' />}
            />

            <Box direction='row' align='center' justify='between'>
                {loggedInUser.username ? (
                    <>
                        <Button icon={<Favorite />} onClick={handleFavorites} />
                        <Button
                            icon={<User />}
                            onClick={() => setShowUserInfo(!showUserInfo)}
                        />
                    </>
                ) : (
                    <Button icon={<Login />} onClick={onOpenLogIn} />
                )}

                <Button
                    icon={<Cart />}
                    onClick={() => setShowSidebar(!showSidebar)}
                />
            </Box>
        </Box>
    );
};

export default NavBar;
