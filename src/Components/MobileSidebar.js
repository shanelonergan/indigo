import React from 'react';
import { FormClose } from 'grommet-icons';
import {
  Box,
  Button,
  Layer,
} from 'grommet';

const MobileSidebar = ({showSidebar, setShowSidebar}) => {
  return (
    <Layer>
      <Box
        background='light-2'
        tag='header'
        justify='end'
        align='center'
        direction='row'
      >
        <Button
          icon={<FormClose />}
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </Box>
      <Box fill background='light-2' align='center' justify='center'>
        sidebar
      </Box>
    </Layer>
  );
};

export default MobileSidebar;
