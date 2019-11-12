import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import { Cart, User, Login, Add } from 'grommet-icons';
import { Box, Button, Heading, Image } from 'grommet';

const NavBar = ({
    onOpenLogIn,
    showSidebar,
    setShowSidebar,
    showUserInfo,
    setShowUserInfo
}) => {
    const loggedInUser = useSelector(state => state.user)

    const history = useHistory()

    const handleHome = () => {
        history.push('/')
    }

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
            <Heading level='3' margin='none' onClick={handleHome} responsive={true} direction='row'>
                indigo
            </Heading>

            <Button icon={<Add />} label='search' gap="xlarge" onClick={() => {}} />

            <Box direction='row' align='center' justify='between'>
                { loggedInUser.username ?
                <Button
                    icon={<User />}
                    onClick={() => setShowUserInfo(!showUserInfo)}
                />
                :
                <Button icon={<Login />} onClick={onOpenLogIn} />
                }

                <Button
                    icon={<Cart />}
                    onClick={() => setShowSidebar(!showSidebar)}
                />
            </Box>
        </Box>
    );
};

export default NavBar;
