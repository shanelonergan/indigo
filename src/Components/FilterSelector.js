import React from 'react';
import { Box, Select } from 'grommet';

const FilterSelector = ({
    filterObj,
    values,
    setValues,
    name,
    multiple,
    handleChange,
    singleSelectValue
}) => {

    if (multiple) {
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
        )
    } else {
        return (
         <Select
            size='small'
            margin='small'
            placeholder={name}
            disabledKey='dis'
            labelKey='name'
            valueKey='id'
            value={singleSelectValue}
            options={filterObj}
            onChange={({ value: nextValue }) => {
                handleChange(nextValue, name);
            }}
        />)
    }
};

export default FilterSelector;
