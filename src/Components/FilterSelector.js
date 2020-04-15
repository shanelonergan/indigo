import React from 'react'
import { Select } from 'grommet'

const FilterSelector = ({ filterObj, values, setValues, name, multiple, handleChange, singleSelectValue }) => {
	const singleSelectObj = filterObj.filter((filter) => filter.id === singleSelectValue)
	console.log(singleSelectObj, filterObj)
	// console.log(multiple)

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
					setValues(nextValue)
                    console.log(nextValue)
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
				value={singleSelectObj ? singleSelectObj : null}
				options={filterObj}
				onChange={({ value: nextValue }) => {
					handleChange(nextValue, name)
				}}
			/>
		)
	}
}

export default FilterSelector
