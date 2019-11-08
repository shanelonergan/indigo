import React from 'react';

const FilterSelector = ({filterObj, handleChange}) => {
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
            <select name='brand_id' onChange={handleChange}>
                <option value='' disabled defaultValue hidden>
                    brand
                </option>
                {renderOptions(filterObj)}
            </select>
        </div>
    );
};

export default FilterSelector;


