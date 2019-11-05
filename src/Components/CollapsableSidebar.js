import React from 'react';
import {
  Box,
  Collapsible,
} from 'grommet';

const CollapsableSidebar = ({showSidebar}) => {
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
        cart
      </Box>
    </Collapsible>
  );
};

export default CollapsableSidebar;
