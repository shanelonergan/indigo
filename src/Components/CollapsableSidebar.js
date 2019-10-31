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

const CollapsableSidebar = ({showSidebar, setShowSidebar}) => {
  return (
    <Collapsible direction='horizontal' open={showSidebar}>
      <Box
        flex
        width='medium'
        background='light-2'
        elevation='small'
        align='center'
        justify='center'
      >
        sidebar
      </Box>
    </Collapsible>
  );
};

export default CollapsableSidebar;
