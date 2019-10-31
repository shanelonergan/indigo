import React from 'react';
import { Notification, FormClose } from 'grommet-icons';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext
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
        Indigo
      </Heading>

      <Button
        icon={<Notification />}
        onClick={() => setShowSidebar(!showSidebar)}
      />
    </Box>
  );
};

export default NavBar;
