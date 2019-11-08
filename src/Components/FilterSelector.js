import React from 'react';

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
        <div className='select is-small'>
            <select name={name + '_id'} onChange={handleChange}>
                {renderOptions(filterObj)}
            </select>
        </div>
    );
};

export default FilterSelector;


