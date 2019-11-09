import React from 'react';
import { Box } from 'grommet'

const FilterSelector = ({filterObj, handleChange, name}) => {

    const renderOptions = (filterObj) => {
        return filterObj.map(filter => (
            <option key={filter.id} value={filter.id} name={filter.name}>
                {filter.name}
            </option>
        ));
    };

    return (

        <Box className='select is-small' width='10vw' margin='small'>
            <select name={name + '_id'} onChange={handleChange}>
                {renderOptions(filterObj)}
            </select>
        </Box>

    );
};

export default FilterSelector;


