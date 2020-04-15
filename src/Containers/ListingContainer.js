import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { getListing } from '../Redux/actions/listingActions'
import { createTransaction } from '../Redux/actions/transactionActions'
import { Stripe, Favorite } from 'grommet-icons'
import { Box, Image, Text, Button, Carousel } from 'grommet'
import { ResizeSpinLoader } from 'react-css-loaders'

const CHARGES_URL = 'https://indigo-api-deployment.herokuapp.com/charges'
const FAVORITES_URL = 'https://indigo-api-deployment.herokuapp.com/favorites'

const ListingContainer = (props) => {
	const dispatch = useDispatch()

	useEffect(() => {
		const urlArr = window.location.href.split('/')
		const listingId = urlArr[4]
		dispatch(getListing(listingId))
	}, [])

	const listing = useSelector((state) => state.listings.currentListing)
	const loggedInUser = useSelector((state) => state.user)
	const [favorited, setFavorited] = useState(false)

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
		console.log(listing)
		const body = {
			listing_id: listing.id,
			user_id: loggedInUser.id,
		}

		console.log(body)

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
		}
	}

	return (
		<>
			<Box size='medium' direction='row'>
				{listing ? (
					<>
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
						<Box
							border={{ color: 'brand', size: 'medium' }}
							margin='small'
							pad='medium'
							responsive={true}
							align='center'
							// justify='center'
							height='80vh'
							width='large'
						>
							<Box direction='column'>
								<Box>
									<Text color='brand' weight='bold' margin='small' alignSelf='center'>
										{listing.brand.name}
									</Text>
									<Box direction='row' justify='between' margin={{ top: 'medium', bottom: 'medium' }}>
										<Box width='25vw'>
											<Text margin={{ bottom: 'small' }}>Details:</Text>
											<Text margin={{ bottom: 'small' }}>{listing.name}</Text>
											<Text margin={{ bottom: 'small' }}>wash: {listing.wash.name}</Text>
											<Text margin={{ bottom: 'small' }}>mill: {listing.mill.name}</Text>
											<Text margin={{ bottom: 'small' }}>
												condition: {listing.condition.name}
											</Text>
											<Text margin={{ bottom: 'small' }} color='red' weight='bold'>
												$ {listing.price}
											</Text>
										</Box>
										<Box direction='column' width='25vw'>
											<Text margin={{ bottom: 'small' }}>Description:</Text>
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
										<Favorite onClick={() => createFavorite(listing)} background='focus' />
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
