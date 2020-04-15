// -> IMPORTS <- \\
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SizeContext } from '../SizeContext'
import { Box, Grid, InfiniteScroll, Button } from 'grommet'
import { ResizeSpinLoader } from 'react-css-loaders'
import { getAllListings } from '../Redux/actions/listingActions'
import { ListingPreview, FilterSelector, FilterSidebar } from '../Components/'
import {
	setCategoriesAction,
	setBrandsAction,
	setConditionsAction,
	setMillsAction,
	setWashesAction,
	clearAppliedFiltersAction,
} from '../Redux/actions/appliedFilterActions'

// -> COMPONENT <- \\
const ShopContainer = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	let filteredListings = []
	const size = useContext(SizeContext)

	// -> URL VARIABLES
	const urlArr = window.location.href.split('/')
	const slug = urlArr[4]
	const searchParamsString = urlArr[3].split('=')[1]
	let searchParamsArr = []
	let searchPhrase = ''
	if (searchParamsString) {
		searchParamsArr = searchParamsString.split('+')
		searchPhrase = searchParamsArr.join(' ')
	}

	// -> REDUX STATE <- \\
	const { brands, categories, conditions, mills, washes } = useSelector((state) => state.filters)
	const listings = useSelector((state) => state.listings.allListings)
	const appliedFilters = useSelector((state) => state.appliedFilters)
	const loggedInUser = useSelector((state) => state.user)

	// -> LOCAL STATE <- \\
	const [brandValues, setBrandValues] = useState('')
	const [categoryValues, setCategoryValues] = useState('')
	const [conditionValues, setConditionValues] = useState('')
	const [millValues, setMillValues] = useState('')
	const [washValues, setWashValues] = useState('')
	const [loaded, setLoaded] = useState(false)
	const [favorites, setFavorites] = useState('')
	const [showFilters, setShowFilters] = useState(false)

	if (listings && !favorites && slug === 'favorites') {
		const favArr = listings.filter((listing) => {
			const allFavorites = listing.favorites.all
			const favoriteUserIds = allFavorites.map((favorite) => favorite.user_id)
			console.log(favoriteUserIds)
			return favoriteUserIds.includes(loggedInUser.id)
		})
		setFavorites(favArr)
	}

	// -> LOGS <- \\
	console.log(favorites)
	console.log(appliedFilters)
	console.log(slug)
	console.log(searchPhrase)

	if (brands && categories && conditions && mills && washes) {
		if (!loaded) {
			setLoaded(true)
		}
		if (slug === 'pants') {
			if (!appliedFilters.category_id) {
				dispatch(setCategoriesAction([1]))
			}
		}
		if (slug === 'shirts') {
			if (!appliedFilters.category_id) {
				dispatch(setCategoriesAction([3]))
			}
		}
		if (slug === 'jackets') {
			if (!appliedFilters.category_id) {
				dispatch(setCategoriesAction([2]))
			}
		}
		if (searchPhrase === 'Kuroki Mills') {
			if (!appliedFilters.mill_id) {
				dispatch(setMillsAction([[2]]))
			}
		}
		if (searchPhrase === '3sixteen') {
			if (!appliedFilters.brand_id) {
				dispatch(setBrandsAction([[3]]))
			}
		}
	}

	useEffect(() => {
		dispatch(getAllListings())
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		if (brandValues) {
			//     const brandIds = brandValues.map(valueObj => valueObj.id);
			dispatch(setBrandsAction(brandValues))
		}
		if (categoryValues) {
			// const categoryIds = categoryValues.map(valueObj => {
			//     console.log("valueObj:", valueObj)
			//     return valueObj.id
			// });
			dispatch(setCategoriesAction(categoryValues))
		}
		if (conditionValues) {
			// const conditionIds = conditionValues.map(valueObj => valueObj.id);
			dispatch(setConditionsAction(conditionValues))
		}
		if (millValues) {
			// const millIds = millValues.map(valueObj => valueObj.id);
			dispatch(setMillsAction(millValues))
		}
		if (washValues) {
			// const washIds = washValues.map(valueObj => valueObj.id);
			dispatch(setWashesAction(washValues))
		}
	}, [brandValues, categoryValues, conditionValues, millValues, washValues])

	const handleListing = (event) => {
		const listingId = event.target.parentNode.id
		console.log(listingId)
		history.push(`/listings/${listingId}`)
	}

	useEffect(() => {
		dispatch(clearAppliedFiltersAction())
	}, [])

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

	const renderListings = () => {
		if (favorites) {
			filteredListings = favorites
		} else {
			filteredListings = listings
		}

		const filterListings = (currentListings, filter) => {
			const intFilterIds = appliedFilters[filter + '_id'].map((stringFilterId) => parseInt(stringFilterId))

			filteredListings = currentListings.filter((listing) => {
				return intFilterIds.includes(listing[filter].id)
			})

			console.log(filteredListings)
		}

		if (appliedFilters.brand_id) {
			filterListings(filteredListings, 'brand')
			console.log('filtering by brand')
		}
		if (appliedFilters.category_id) {
			console.log('filtering by category')
			filterListings(filteredListings, 'category')
		}
		if (appliedFilters.condition_id) {
			console.log('filtering by condition')
			filterListings(filteredListings, 'condition')
		}
		if (appliedFilters.mill_id) {
			console.log('filtering by condition')
			filterListings(filteredListings, 'mill')
		}
		if (appliedFilters.wash_id) {
			console.log('filtering by condition')
			filterListings(filteredListings, 'wash')
		}

		return (
			<>
				<Box fill>
					{size === 'medium' || 'large' ? (
						<Grid
							columns='small'
							rows='medium'
							// fill='horizontal'
							// align='center'
						>
							<InfiniteScroll items={filteredListings} step={8}>
								{(item) => (
									<ListingPreview key={item.id} listing={item} handleListing={handleListing} />
								)}
							</InfiniteScroll>
						</Grid>
					) : (
						<Grid
							columns='xsmall'
							rows='small'
							// fill='horizontal'
							// align='center'
						>
							<InfiniteScroll items={filteredListings} step={8}>
								{(item) => (
									<ListingPreview key={item.id} listing={item} handleListing={handleListing} />
								)}
							</InfiniteScroll>
						</Grid>
					)}
				</Box>
			</>
		)
	}

	return (
		<Box fill overflow='hidden'>
			<Box margin='medium'>
				<Button label='Filters' onClick={() => setShowFilters(true)} />
			</Box>
			{loaded ? (
				<Box>
					{showFilters ? (
						<FilterSidebar
							showFilters={showFilters}
							setShowFilters={setShowFilters}
							brandValues={brandValues}
							setBrandValues={setBrandValues}
							categoryValues={categoryValues}
							setCategoryValues={setCategoryValues}
							conditionValues={conditionValues}
							setConditionValues={setConditionValues}
							millValues={millValues}
							setMillValues={setMillValues}
							washValues={washValues}
							setWashValues={setWashValues}
							setFavorites={setFavorites}
						/>
					) : null}
					{/* <Box
                        gridArea='sidebar'
                        // fill='vertical'
                        // position='fixed'
                        background='c2'
                        width='250px'
                        height='100vh'
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

                        <Button
                            onClick={clearFilters}
                            size='small'
                            label='clear filters'
                            margin='small'
                        />
                    </Box> */}

					<Box justify='center' align='center' overflow='scroll'>
						{listings ? renderListings() : null}
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

export default ShopContainer
