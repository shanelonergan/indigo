import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Collapsible,
} from 'grommet';

const UserSidebar = ({showUserInfo}) => {
    const username = useSelector(state => state.user.username);
    console.log(username)
    const text = username ? (
        username + ' is currently logged in'
      ) : (
        'Nobody is logged in'
      );

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
      </Box>
    </Collapsible>
  );
};

export default UserSidebar;
