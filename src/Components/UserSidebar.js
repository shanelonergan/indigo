import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/actions'
import { useSelector } from 'react-redux';
import {
  Box,
  Collapsible,
  Button
} from 'grommet';

const UserSidebar = ({showUserInfo}) => {
    const username = useSelector(state => state.user.username);
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

        <Button label="log out" onClick={onLogout}/>
      </Box>
    </Collapsible>
  );
};

export default UserSidebar;
