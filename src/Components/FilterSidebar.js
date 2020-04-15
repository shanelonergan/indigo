import React from 'react';
import { FormClose } from 'grommet-icons';
import {
  Box,
  Button,
  Layer,
} from 'grommet';

const FilterSidebar = ({showFilters, setShowFilters}) => {
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
          onClick={() => setShowFilters(!showFilters)}
        />
      </Box>
      <Box fill background='light-2' align='center' justify='center'>
        filters
      </Box>
    </Layer>
  );
};

export default FilterSidebar;
