import React, { useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { SizeContext } from './SizeContext'

// ==> Grommet <== \\
import { Box, Grommet, ResponsiveContext, Footer, Text, Button } from 'grommet'
import { Grommet as GrommetIcon, Favorite, Reactjs, Github, Twitter, Medium } from 'grommet-icons'

// ==> Themes \\
import light from './Themes/light'
import { grommet, dark } from 'grommet/themes'
import { dxc } from 'grommet-theme-dxc'

// ==> Components <== \\
import Routes from './Routes'
import NavBar from './Components/NavBar'
import CollapsableSidebar from './Components/CollapsableSidebar'
import UserSidebar from './Components/UserSidebar'
import MobileSidebar from './Components/MobileSidebar'
import { persistUser } from './Redux/actions'
import { getCategories, getBrands, getConditions, getMills, getWashes } from './Redux/actions/filterActions'
import LoginContainer from './Containers/LoginContainer'

function App() {
	const [showSidebar, setShowSidebar] = useState(false)
	const [showUserInfo, setShowUserInfo] = useState(false)
	const [openLogIn, setOpenLogIn] = useState(false)

	const dispatch = useDispatch()

	const onOpenLogIn = () => setOpenLogIn(true)
	const onCloseLogIn = () => setOpenLogIn(false)

	useEffect(() => {
		if (localStorage.token) {
			dispatch(persistUser())
		}
		dispatch(getCategories())
		dispatch(getBrands())
		dispatch(getConditions())
		dispatch(getMills())
		dispatch(getWashes())
	}, [])

	return (
		<Grommet theme={light} full>
			<ResponsiveContext.Consumer>
				{(size) => (
					<SizeContext.Provider value={size}>
						<Box>
							<NavBar
								showSidebar={showSidebar}
								setShowSidebar={setShowSidebar}
								showUserInfo={showUserInfo}
								setShowUserInfo={setShowUserInfo}
								openLogIn={openLogIn}
								setOpenLogIn={setOpenLogIn}
								onOpenLogIn={onOpenLogIn}
								onCloseLogIn={onCloseLogIn}
							/>

							<Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
								<Box fill align='center' justify='center'>
									<LoginContainer
										openLogIn={openLogIn}
										setOpenLogIn={setOpenLogIn}
										onOpenLogIn={onOpenLogIn}
										onCloseLogIn={onCloseLogIn}
									/>
									<Routes />
								</Box>

								{!showSidebar || size !== 'small' ? (
									<CollapsableSidebar
										showSidebar={showSidebar}
										setShowSidebar={setShowSidebar}
										showUserInfo={showUserInfo}
										setShowUserInfo={setShowUserInfo}
									/>
								) : (
									<MobileSidebar
										showSidebar={showSidebar}
										setShowSidebar={setShowSidebar}
										showUserInfo={showUserInfo}
										setShowUserInfo={setShowUserInfo}
										setOpenLogIn={setOpenLogIn}
										openLogIn={openLogIn}
									/>
								)}

								{!showUserInfo || size !== 'small' ? (
									<UserSidebar
										showUserInfo={showUserInfo}
										setShowUserInfo={setShowUserInfo}
										openLogIn={openLogIn}
										setOpenLogIn={setOpenLogIn}
										onOpenLogIn={onOpenLogIn}
										onCloseLogIn={onCloseLogIn}
									/>
								) : (
									<MobileSidebar showUserInfo={showUserInfo} setShowUserInfo={setShowUserInfo} />
								)}
							</Box>
						</Box>
						<Footer background='brand' pad='small'>
							{/* <Box> */}

							<Box direction='column'>
								<Box direction='column'>
									<Box direction='row'>
										<Text size='small' margin={{ top: 'xxsmall' }}>
											Made with
										</Text>
										<Box margin={{ left: 'xsmall', right: 'xxsmall' }}>
											<GrommetIcon size='medium' color='accent-2' />
										</Box>
										<Text size='small' margin={{ top: 'xxsmall' }}>
											{' '}
											,
										</Text>
										<Box margin={{ left: 'xsmall', right: 'xxsmall' }}>
											<Reactjs size='medium' color='#61DBFB' />
										</Box>
										<Text size='small' margin={{ top: 'xxsmall' }}>
											{' '}
											, and a whole lot of
										</Text>
										<Box margin={{ left: 'xsmall', right: 'xxsmall' }}>
											<Favorite size='medium' color='focus' />
										</Box>
										<Text size='small' margin={{ top: 'xxsmall' }}>
											by Shane Lonergan
										</Text>
									</Box>
									<Box direction='row' alignSelf='center'>
										<Button icon={<Github />} plain />
										<Button icon={<Github />} plain />
										<Button icon={<Github />} plain />
									</Box>
								</Box>
							</Box>
							<Box direction='column'>
								<Text size='small' margin={{ top: 'xsmall' }}>
									Indigo is open-source! Check it out on GitHub:
								</Text>
								<Button icon={<Github />} plain alignSelf='center' />
							</Box>
							<Box>
								<Text size='small'>© 2020</Text>
							</Box>

							{/* </Box> */}
						</Footer>
					</SizeContext.Provider>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	)
}

export default App
