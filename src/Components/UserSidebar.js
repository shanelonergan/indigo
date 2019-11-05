import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/actions'
import {
  Box,
  Collapsible,
  Button
} from 'grommet';

const UserSidebar = ({showUserInfo, onOpenLogIn, setOpenLogIn, openLogIn}) => {
    const loggedInUser = useSelector(state => state.user)
    const username = loggedInUser.username
    console.log(username)
    const text = username ? (
        username + ' is currently logged in'
      ) : (
        'Nobody is logged in'
      );
    const dispatch = useDispatch()

    const onLogout = () => {
      dispatch(logoutUser())
    }

  return (
    <Collapsible direction='horizontal' open={showUserInfo}>
      <Box
        flex
        width='medium'
        background='light-2'
        elevation='small'
        align='center'
        justify='center'
      >
        {text}
        {username ?
        <Button label="log out" onClick={onLogout}/>
        :
        <Button label="log in" onClick={() => setOpenLogIn(!openLogIn)}/>
        }
      </Box>
    </Collapsible>
  );
};

export default UserSidebar;
