import React from 'react';
import { Cart } from 'grommet-icons';
import {
  Box,
  Button,
  Heading,
} from 'grommet';

const NavBar = ({showSidebar, setShowSidebar}) => {
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

      <Button
        icon={<Cart />}
        onClick={() => setShowSidebar(!showSidebar)}
      />
    </Box>
  );
};

export default NavBar;
