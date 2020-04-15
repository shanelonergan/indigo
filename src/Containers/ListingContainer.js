import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { getListing } from '../Redux/actions/listingActions'
import { createTransaction } from '../Redux/actions/transactionActions'
import { Stripe, Favorite } from 'grommet-icons'
import { Box, Image, Text, Button, Carousel } from 'grommet'
import { ResizeSpinLoader } from 'react-css-loaders'
import { SizeContext } from '../SizeContext'

const CHARGES_URL = 'https://indigo-api-deployment.herokuapp.com/charges'
const FAVORITES_URL = 'https://indigo-api-deployment.herokuapp.com/favorites'

const ListingContainer = (props) => {
	const dispatch = useDispatch()
	const size = useContext(SizeContext)

	useEffect(() => {
		const urlArr = window.location.href.split('/')
		const listingId = urlArr[4]
		dispatch(getListing(listingId))
	}, [])

	const listing = useSelector((state) => state.listings.currentListing)
	const loggedInUser = useSelector((state) => state.user)
	const [favorited, setFavorited] = useState(false)

	if (
		loggedInUser.favorites &&
		listing &&
		loggedInUser.favorites.map((listing) => listing.id).includes(listing.id) &&
		!favorited
	) {
		setFavorited(true)
	}

	useEffect(() => {
		if (loggedInUser) console.log('FAVORITES:', loggedInUser)
		if (loggedInUser.favorites && loggedInUser.favorites.includes(listing)) {
			setFavorited(true)
		}
	}, [])

	const onToken = (token) => {
		console.log(token)
		createCharge(token, listing)
		dispatch(createTransaction(listing, loggedInUser))
	}

	const createCharge = async (token, listing) => {
		const charge = {
			token: token.id,
		}
		const price = listing.price

		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ charge: charge, price: price }),
		}

		fetch(CHARGES_URL, config)
			.then((res) => res.json())
			.then(console.log)
	}

	const createFavorite = (listing) => {
		const body = {
			listing_id: listing.id,
			user_id: loggedInUser.id,
		}
		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		}

		if (!favorited) {
			fetch(FAVORITES_URL, config)
				.then((res) => res.json())
				.then(console.log)
				.then(setFavorited(true))
		} else {
			setFavorited(false)
		}
	}

	return (
		<>
			<Box size='medium' direction='row-responsive'>
				{listing ? (
					<>
						{size === 'small' ? (
							<Box margin='small' overflow='auto'>
								<Carousel fill>
									<Image
										// fit='cover'
										src='https://images.garmentory.com/images/2574568/large/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464745'
									/>
									<Image
										// fit='cover'
										src='https://images1.garmentory.com/images/2574569/xxl/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464746'
									/>
								</Carousel>
							</Box>
						) : (
							<Box margin='small' responsive={true} height='80vh' width='36vw' overflow='auto'>
								<Carousel fill>
									<Image
										fit='cover'
										src='https://images.garmentory.com/images/2574568/large/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464745'
									/>
									<Image
										fit='cover'
										src='https://images1.garmentory.com/images/2574569/xxl/Railcar-Spikes-X042-Jeans-20190417013220.jpg?1555464746'
									/>
								</Carousel>
							</Box>
						)}
						<Box border={{ color: 'brand', size: 'medium' }} margin='small' pad='small' align='center'>
							<Box direction='column'>
								<Box>
									<Text color='brand' weight='bold' margin='small' alignSelf='center'>
										{listing.brand.name}
									</Text>
									<Box
										direction='row-responsive'
										justify='between'
										margin={{ top: 'medium', bottom: 'medium' }}
									>
										<Box>
											<Text margin={{ bottom: 'small' }} alignSelf='center' color='control'>
												Details
											</Text>
											<Text margin={{ bottom: 'small' }}>{listing.name}</Text>
											<Text margin={{ bottom: 'small' }}>wash: {listing.wash.name}</Text>
											<Text margin={{ bottom: 'small' }}>mill: {listing.mill.name}</Text>
											<Text margin={{ bottom: 'small' }}>
												condition: {listing.condition.name}
											</Text>
											<Text
												margin={{ bottom: 'small' }}
												color='focus'
												weight='bold'
												alignSelf='center'
											>
												$ {listing.price}
											</Text>
										</Box>
										<Box direction='column' width='medium'>
											<Text margin={{ bottom: 'small' }} alignSelf='center' color='control'>
												Description
											</Text>
											<Text>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa
												cumque aut unde aspernatur id non atque, iure nesciunt voluptas corrupti
												porro magni hic itaque saepe laboriosam numquam odio placeat.
											</Text>
										</Box>
									</Box>
									<Box direction='row' align='center' alignSelf='center'>
										<StripeCheckout
											stripeKey='pk_test_LEfFcUQR5pRWI12plUR9V4Rq00MrKBR0Bg'
											amount={listing.price * 100} //stripe price is in cents
											currency='USD'
											token={onToken}
											panelLabel='Purchase for {{amount}}'
											ComponentClass='div'
											name='indigo'
											shippingAddress
										>
											<Button
												icon={<Stripe />}
												label='Purchase'
												margin={{ right: 'medium' }}
												color='brand'
												primary
											/>
										</StripeCheckout>
										<Favorite
											onClick={() => createFavorite(listing)}
											color={favorited ? 'focus' : 'brand'}
										/>
									</Box>
								</Box>
								<Box direction='column' margin={{ top: 'medium' }} alignSelf='center'>
									<Text color='brand' weight='bold' margin='small' alignSelf='center'>
										Listed by:
									</Text>
									<Box direction='row'>
										<Box
											height='xsmall'
											width='xsmall'
											margin={{ right: 'small' }}
											border={{ color: 'brand', size: 'medium' }}
										>
											<Image fit='cover' src={listing.user.img_url} />
										</Box>
										<Box justify='center'>
											<Text>{listing.user.username}</Text>
											<Text>{listing.user.location}</Text>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
					</>
				) : (
					<Box justify='center' align='center' height='100vh'>
						<ResizeSpinLoader color='#00004D' />
					</Box>
				)}
			</Box>
		</>
	)
}

export default ListingContainer
