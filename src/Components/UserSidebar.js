import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Redux/actions'
import {
  Box,
  Collapsible,
  Button,
  Text
} from 'grommet';

const UserSidebar = ({showUserInfo, onOpenLogIn, setOpenLogIn, openLogIn, setShowUserInfo}) => {
    const loggedInUser = useSelector(state => state.user)
    const username = loggedInUser.username
    console.log(username)
    const text = username ? (
        `Welcome, ${username}`
      ) : (
        'Nobody is logged in'
      );
    const dispatch = useDispatch()

    const onLogout = () => {
      dispatch(logoutUser())
      setShowUserInfo(false)
    }

  return (
    <Collapsible direction='horizontal' open={showUserInfo}>
      <Box
        flex
        width='medium'
        background='c2'
        elevation='small'
        align='center'
        justify='center'
      >
        <Text margin='medium'>{text}</Text>
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
