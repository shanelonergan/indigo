import React from 'react';
import { Box, Select } from 'grommet'

const FilterSelector = ({ filterObj, handleChange, name, multiple, setFilters }) => {

    const renderOptions = (filterObj) => {
        return filterObj.map(filter => (
            <option key={filter.id} value={filter.id} name={filter.name}>
                {filter.name}
            </option>
        ));
    };

    return (


        <Box className='' width='10vw' margin='small'>
            <select name={name + '_id'} onChange={handleChange} multiple>
                {renderOptions(filterObj)}
            </select>
        </Box>



    );
};

export default FilterSelector;


