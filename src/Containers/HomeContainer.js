import React from 'react'
import { useHistory } from 'react-router-dom'

import { Box, Button, Image, Stack, Text, Carousel } from 'grommet'

const HomeContainer = () => {
	let history = useHistory()
	const handleShop = () => {
		history.push('/listings')
	}
	const handleSell = () => {
		history.push('/listings/new')
	}
	const handleLearn = () => {
		history.push('/learn')
	}
	const handleMill = (millName) => {
		const textArr = millName.split(' ')
		const textSlug = textArr.join('+')
		history.push(`/listings?mill=${textSlug}`)
	}
	const handleBrand = (brandName) => {
		const textArr = brandName.split(' ')
		const textSlug = textArr.join('+')
		history.push(`/listings?brand=${textSlug}`)
	}

	return (
		<Box pad='medium' gap='small' align='center' justify='center'>
			<Box pad={{ top: 'medium' }}>
				<Box width='96vw' height={{'min': '4.5em'}} align='center' direction='row-responsive' justify='center'>
					<Box align='center' justify='center' fill pad='small'>
						<Button label='shop' fill={true} onClick={handleShop} color='brand' />
					</Box>
					<Box justify='center' align='center' fill pad='small'>
						<Button label='sell' fill={true} onClick={handleSell} color='brand' primary />
					</Box>
					<Box justify='center' align='center' fill pad='small'>
						<Button label='learn' fill={true} onClick={handleLearn} color='brand' />
					</Box>
				</Box>
			</Box>
			<Box pad={{ top: 'medium' }}>
				<Box width='96vw' height='auto' align='center' justify='around' direction='column'>
					<Box>
						<Text size='xxlarge' color='brand'>
							Featured collections:
						</Text>
					</Box>
					<Box direction='row-responsive'>
						<Box height='fixed' width='large' overflow='auto' pad='small'>
							<Stack anchor='center' onClick={() => handleMill('Kuroki Mills')}>
								<Carousel play={4000} controls='selectors'>
									<Image src='https://i.imgur.com/AhNpNsR.jpg' />
									<Image src='https://i.imgur.com/HrQUSpx.jpg' />
									<Image src='https://i.imgur.com/AYWUBYU.jpg' />
								</Carousel>
								<Text weight='bold' color='focus' size='8vw'>
									Kuroki Mills
								</Text>
							</Stack>
						</Box>
						<Box height='auto' width='large' overflow='hidden' pad='small'>
							<Stack anchor='center' onClick={() => handleBrand('3sixteen')}>
								<Carousel fill play={4000} controls='selectors'>
									<Image src='https://i2.wp.com/auntay.com/wp-content/uploads/2018/01/20180119-DSCF6843-2-e1525548321456.jpg?ssl=1' />
									<Image src='https://www.gessato.com/wp-content/uploads/2019/05/3sixteen-rinsed-kibata-jeans-2.jpg' />
									<Image src='https://i.imgur.com/RblqRCz.jpg' />
								</Carousel>
								<Text weight='bold' color='focus' size='8vw'>
									3sixteen
								</Text>
							</Stack>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box pad={{ top: 'medium' }} direction='column' width='96vw' height='auto' align='center' justify='around'>
				<Box>
					<Text size='xxlarge' color='brand'>
						Shop by category:
					</Text>
				</Box>

				<Box direction='row-responsive' justify='around' gap='large'>
					<Box width='35vh' pad='small'>
						<Stack
							anchor='center'
							onClick={() => {
								history.push('/listings/pants')
							}}
						>
							<Box align='center' justify='center' height='auto'>
								<Image src='https://cdn.shopify.com/s/files/1/0070/1922/products/LINEN_JEANS_SLIM_1024x1024.jpg?v=1547508728' />
							</Box>
							<Text color='white' size='xxlarge'>
								pants
							</Text>
						</Stack>
					</Box>
					<Box width='35vh' pad='small'>
						<Stack
							anchor='center'
							onClick={() => {
								history.push('/listings/shirts')
							}}
						>
							<Box align='center' justify='center' height='auto'>
								<Image src='https://www.urbanrider.co.uk/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/r/o/rokker-denim-rider-shirt-raw-main.jpg' />
							</Box>
							<Text color='white' size='xxlarge'>
								shirts
							</Text>
						</Stack>
					</Box>
					<Box width='35vh' pad='small'>
						<Stack
							anchor='center'
							onClick={() => {
								history.push('/listings/jackets')
							}}
						>
							<Box align='center' justify='center' height='auto'>
								<Image src='https://media.endclothing.com/media/catalog/product/0/6/06-07-2015_apc_rawdenimjacket_indigo_1_jtl.jpg' />
							</Box>
							<Text color='white' size='xxlarge'>
								jackets
							</Text>
						</Stack>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default HomeContainer
