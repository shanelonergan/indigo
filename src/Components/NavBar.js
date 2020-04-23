import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Cart, User, Login, Favorite } from 'grommet-icons';
import { Box, Button, Heading } from 'grommet';
import { SearchBar } from '../Components'

const NavBar = ({
    onOpenLogIn,
    showSidebar,
    setShowSidebar,
    showUserInfo,
    setShowUserInfo
}) => {
    const loggedInUser = useSelector(state => state.user);

    const [searchDrop, setSearchDrop] = useState(false)

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
                responsive={true}
                direction='row'
            >
                <Button label='indigo' onClick={handleHome} plain/>
            </Heading>

            <SearchBar
                searchDrop={searchDrop}
                setSearchDrop={setSearchDrop}
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

                {/* <Button
                    icon={<Cart />}
                    onClick={() => setShowSidebar(!showSidebar)}
                /> */}
            </Box>
        </Box>
    );
};

export default NavBar;
