import React from 'react';
import { Box, Select } from 'grommet';

const FilterSelector = ({
    filterObj,
    handleChange,
    name,
    multiple,
    setFilters,
    filters
}) => {
    const allFilterIds = filterObj.map(filter => filter.id)
    console.log(allFilterIds)
    const renderOptions = filterObj => {
        return filterObj.map(filter => (
            <option key={filter.id} value={filter.id} name={filter.name}>
                {filter.name}
            </option>
        ));
    };

    return (
        <Box className='' width='10vw' margin='small'>
            <select name={name + '_id'} onChange={handleChange} multiple>
                <option key='all' value={allFilterIds} name='name' selected>
                    all brands
                </option>
                {renderOptions(filterObj)}
            </select>
        </Box>
    );
};

export default FilterSelector;
