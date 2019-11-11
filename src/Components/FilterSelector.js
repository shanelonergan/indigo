import React from 'react';
import { Box, Select } from 'grommet';

const FilterSelector = ({
    filterObj,
    values,
    setValues,
    name
}) => {

    return (

        <Select
            size='small'
            margin='small'
            placeholder={name}
            multiple
            closeOnChange={false}
            disabledKey='dis'
            labelKey='name'
            valueKey='id'
            value={values}
            options={filterObj}
            onChange={({ value: nextValue }) => {
                setValues(nextValue);
            }}
        />
    );
};

export default FilterSelector;
