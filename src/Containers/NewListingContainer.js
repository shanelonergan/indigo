import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { createListing } from '../Redux/actions/listingActions'
import { Checkmark } from 'grommet-icons'
import { FilterSelector } from '../Components/index'
import { ResizeSpinLoader } from 'react-css-loaders'

import { Box, Button, Form, FormField, TextArea, Text } from 'grommet'

const NewListingContainer = () => {
	const dispatch = useDispatch()

	const loggedInUser = useSelector((state) => state.user)

	const { brands, categories, conditions, mills, washes } = useSelector((state) => state.filters)

	const [toListings, setToListings] = useState(false)

	const [loaded, setLoaded] = useState(false)

	const [newListingForm, setNewListingForm] = useState({
		name: '',
		category_id: '',
		brand_id: '',
		waist: 30,
		length: 32,
		weight: 12,
		wash_id: '',
		mill_id: '',
		condition_id: '',
		price: 0,
	})

	if (brands && categories && conditions && mills && washes) {
		if (!loaded) {
			setLoaded(true)
		}
	}

	const handleDropDownChange = (id, name) => {
		// debugger
		const nameWithId = name + '_id'
		console.log(id, nameWithId)
		setNewListingForm({
			...newListingForm,
			[nameWithId]: id,
		})
	}

	const handleChange = (event) => {
		setNewListingForm({
			...newListingForm,
			[event.target.name]: event.target.value,
		})
		console.log(newListingForm)
	}

	const handleSubmit = (event) => {
		const listingInfo = { listing: newListingForm, user_id: loggedInUser.id }
		console.log(listingInfo)
		event.preventDefault()
		setToListings(true)
		dispatch(createListing(listingInfo))
	}

	return (
		<Box fill align='center' justify='center'>
			{toListings ? <Redirect to='/listings' /> : null}
			{loaded === true ? (
				<Box>
					<Box align='center'>
						<Text size='6vh' margin={{ top: 'medium', bottom: 'medium' }} color='brand' weight='bold'>
							Create a listing
						</Text>
					</Box>
					<Box margin='medium'>
						<Form onSubmit={handleSubmit}>
                        <FormField
								placeholder='item name'
								name='name'
								value={newListingForm.name}
								onChange={handleChange}
								required
							/>
                        <Box direction='row-responsive' gap='medium'>
                            <Box direction='column'>

							<FilterSelector
								handleChange={handleDropDownChange}
								filterObj={brands}
								name='brand'
								singleSelectValue={newListingForm.brand_id}
								multiple={false}
								required
							/>

							<FilterSelector
								handleChange={handleDropDownChange}
								filterObj={categories}
								name='category'
								singleSelectValue={newListingForm.category_id}
								multiple={false}
								required
							/>

							<FilterSelector
								handleChange={handleDropDownChange}
								filterObj={conditions}
								name='condition'
								singleSelectValue={newListingForm.condition_id}
								multiple={false}
								required
							/>
                            <FilterSelector
								handleChange={handleDropDownChange}
								filterObj={washes}
								name='wash'
								singleSelectValue={newListingForm.wash_id}
								multiple={false}
								required
							/>

							<FilterSelector
								handleChange={handleDropDownChange}
								filterObj={mills}
								name='mill'
								singleSelectValue={newListingForm.mill_id}
								multiple={false}
								required
							/>

							{/* <FormField
                        name='gender'
                        component={RadioButtonGroup}
                        pad
                        options={['male', 'female', 'unisex']}
                    /> */}

							</Box>
                            <Box direction='column'>
                            <FormField
								label='waist'
								name='waist'
								type='number'
								value={newListingForm.waist}
								onChange={handleChange}
							/>
							<FormField
								label='length'
								placeholder='length'
								name='length'
								type='number'
								value={newListingForm.length}
								onChange={handleChange}
							/>
							<FormField
								label='denim weight (oz)'
								name='weight'
								type='number'
								value={newListingForm.weight}
								onChange={handleChange}
							/>
                            <FormField
								label='price'
								placeholder='price'
								name='price'
								type='number'
								value={newListingForm.price}
								onChange={handleChange}
							/>


                            </Box>
                            </Box><FormField
								placeholder='item description'
								name='description'
								component={TextArea}
								value={newListingForm.description}
								onChange={handleChange}
							/>
							<Box margin={{ top: 'medium', bottom: 'medium' }}>
								<Button
									type='submit'
									label='submit'
									primary
									color='brand'
									alignSelf='center'
									fill={true}
									icon={<Checkmark />}
								/>
							</Box>
						</Form>
					</Box>
				</Box>
			) : (
				<Box justify='center' align='center' height='100vh'>
					<ResizeSpinLoader color='#00004D' />
				</Box>
			)}
		</Box>
	)
}

export default NewListingContainer
