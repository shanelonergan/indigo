import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Collapsible,
} from 'grommet';

const UserSidebar = ({showUserInfo}) => {
    const username = useSelector(state => state.username);
    console.log(username)
    const text = username ? (
        <h1>{username} is currently logged in</h1>
      ) : (
        <p>Nobody is logged in</p>
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
