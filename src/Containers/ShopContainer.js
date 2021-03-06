// -> IMPORTS <- \\
import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SizeContext } from '../SizeContext'
import { Box, Grid, InfiniteScroll, Button } from 'grommet'
import { ResizeSpinLoader } from 'react-css-loaders'
import { getAllListings } from '../Redux/actions/listingActions'
import { ListingPreview, FilterSidebar } from '../Components/'
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
	console.log('screensize:', size)

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
			console.log('favoriteUserIds:', favoriteUserIds)
			return favoriteUserIds.includes(loggedInUser.id)
		})
		setFavorites(favArr)
	}

	// -> LOGS <- \\
	// console.log('favorites:', favorites)
	// console.log('applied filters:', appliedFilters)
	// console.log('slug:', slug)
	// console.log('search phrase:', searchPhrase)

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
	}, [dispatch])

	useEffect(() => {
		if (brandValues) {
			dispatch(setBrandsAction(brandValues))
		}
		if (categoryValues) {
			dispatch(setCategoriesAction(categoryValues))
		}
		if (conditionValues) {
			dispatch(setConditionsAction(conditionValues))
		}
		if (millValues) {
			dispatch(setMillsAction(millValues))
		}
		if (washValues) {
			dispatch(setWashesAction(washValues))
		}
	}, [brandValues, categoryValues, conditionValues, millValues, washValues, dispatch])

	const handleListing = (event) => {
		const listingId = event.target.parentNode.id
		console.log('listingId:', listingId)
		history.push(`/listings/${listingId}`)
	}

	useEffect(() => {
		dispatch(clearAppliedFiltersAction())
	}, [dispatch])

	const renderListings = () => {
		if (favorites) {
			filteredListings = favorites
		} else {
			filteredListings = listings
		}

		const filterListings = (currentListings, filter) => {
			const intFilterIds = appliedFilters[filter + '_id'].map((filterObj) => parseInt(filterObj.id))
			console.log(appliedFilters[filter + '_id'], intFilterIds)

			filteredListings = currentListings.filter((listing) => {
				return intFilterIds.includes(listing[filter].id)
			})

			if (searchPhrase) {
				console.log('hello search phrase')
			}
		}

		if (appliedFilters.brand_id) {
			filterListings(filteredListings, 'brand')
		}
		if (appliedFilters.category_id) {
			filterListings(filteredListings, 'category')
		}
		if (appliedFilters.condition_id) {
			filterListings(filteredListings, 'condition')
		}
		if (appliedFilters.mill_id) {
			filterListings(filteredListings, 'mill')
		}
		if (appliedFilters.wash_id) {
			filterListings(filteredListings, 'wash')
		}

		return (
			<>
				<Box fill>
					{size === 'small' ? (
						<Grid columns='30vw' rows='25vw'>
							<InfiniteScroll items={filteredListings} step={8}>
								{(item) => (
									<ListingPreview key={item.id} listing={item} handleListing={handleListing} />
								)}
							</InfiniteScroll>
						</Grid>
					) : (
						<Grid columns='small' rows='medium'>
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
