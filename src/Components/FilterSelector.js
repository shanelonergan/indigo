import React from 'react';
import { Box } from 'grommet'

const FilterSelector = ({filterObj, handleChange, name}) => {
    console.log(filterObj)
    const renderOptions = (filterObj) => {
        return filterObj.map(filter => (
            <option key={filter.id} value={filter.id} name={filter.name}>
                {filter.name}
            </option>
        ));
    };

    return (
        <Box>
        <div className='select is-small'>
            <select name={name + '_id'} onChange={handleChange}>
                {renderOptions(filterObj)}
            </select>
        </div>
        </Box>
    );
};

export default FilterSelector;


