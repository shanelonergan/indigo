import React from 'react';
import { Box, Select } from 'grommet';

const FilterSelector = ({
    filterObj,
    values,
    setValues
}) => {
    // const allFilterIds = filterObj.map(filter => filter.id);
    // const filterIdObj = { ...allFilterIds };

    // const setAll = (filter) => {
    //     setFilters({
    //         ...filters,
    //         [`${filter.name}_id`]: allFilterIds
    //     })
    // }

    // const renderOptions = filterObj => {
    //     return filterObj.map(filter => (
    //         <option key={filter.id} value={filter.id} name={filter.name}>
    //             {filter.name}
    //         </option>
    //     ));
    // };

    return (
        // <Box className='' width='10vw' margin='small'>
        //     <select name={name + '_id'} onChange={handleChange} multiple>
        //         {/* <option key='all' value={null} name='name' selected>
        //             all brands
        //         </option> */}
        //         {renderOptions(filterObj)}
        //     </select>
        // </Box>
        <Select
            size='small'
            margin='small'
            placeholder='select multiple'
            multiple
            closeOnChange={false}
            disabledKey='dis'
            labelKey='name'
            valueKey='id'
            value={values}
            options={filterObj}
            onChange={({ value: nextValue }) => {
                // setValue(...value, nextValue[0].id)
                setValues(nextValue);
            }}
            // onClose={() => setFilters(filters)}
        />
    );
};

export default FilterSelector;
