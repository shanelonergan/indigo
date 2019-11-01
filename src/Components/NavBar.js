import React from 'react';
import { Cart, User } from 'grommet-icons';
import { Box, Button, Heading } from 'grommet';

const NavBar = ({ showSidebar, setShowSidebar, showUserInfo, setShowUserInfo }) => {
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
        >
            <Heading level='3' margin='none'>
                indigo
            </Heading>

            <Box direction='row' align='center' justify='between'>
                <Button
                    icon={<User />}
                    onClick={() => setShowUserInfo(!showUserInfo)}
                />

                <Button
                    icon={<Cart />}
                    onClick={() => setShowSidebar(!showSidebar)}
                />
            </Box>
        </Box>
    );
};

export default NavBar;
