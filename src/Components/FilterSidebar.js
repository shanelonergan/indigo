// -> IMPORTS <- \\
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Box, Button, Layer } from 'grommet'
import { FormClose } from 'grommet-icons'
import { FilterSelector } from '../Components/'
import {
	clearAppliedFiltersAction,
} from '../Redux/actions/appliedFilterActions'

const FilterSidebar = ({
	showFilters,
	setShowFilters,
	brandValues,
	setBrandValues,
	categoryValues,
	setCategoryValues,
	conditionValues,
	setConditionValues,
	millValues,
	setMillValues,
	washValues,
	setWashValues,
    setFavorites
}) => {
	const dispatch = useDispatch()
	const history = useHistory()
    const { brands, categories, conditions, mills, washes } = useSelector(state => state.filters);
    console.log(brands, categories, conditions, mills, washes)

	const clearFilters = () => {
		dispatch(clearAppliedFiltersAction())
		setBrandValues('')
		setCategoryValues('')
		setConditionValues('')
		setMillValues('')
		setWashValues('')
		setFavorites('')
		history.push('/listings')
	}
	return (
		<Layer>
			<Box background='light-2' tag='header' justify='end' align='center' direction='row'>
				<Button icon={<FormClose />} onClick={() => setShowFilters(!showFilters)} />
			</Box>
			<Box fill background='light-2' align='center' justify='center'>
				<Box
					justify='center'
					align='center'
				>
					<FilterSelector
						filterObj={brands}
						setValues={setBrandValues}
						values={brandValues}
						name='brands'
						multiple={true}
					/>
					<FilterSelector
						filterObj={categories}
						setValues={setCategoryValues}
						values={categoryValues}
						name='categories'
						multiple={true}
					/>
					<FilterSelector
						filterObj={conditions}
						setValues={setConditionValues}
						values={conditionValues}
						name='conditions'
						multiple={true}
					/>
					<FilterSelector
						filterObj={mills}
						setValues={setMillValues}
						values={millValues}
						name='mills'
						multiple={true}
					/>
					<FilterSelector
						filterObj={washes}
						setValues={setWashValues}
						values={washValues}
						name='washes'
						multiple={true}
					/>

					<Button onClick={clearFilters} size='small' label='clear filters' margin='small' />
				</Box>
			</Box>
		</Layer>
	)
}

export default FilterSidebar
