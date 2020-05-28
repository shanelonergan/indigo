import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SizeContext } from './SizeContext'

// ==> Grommet <== \\
import { Box, Grommet, ResponsiveContext, Footer, Text, Button, Avatar } from 'grommet'
import { Grommet as GrommetIcon, Favorite, Reactjs, Github, Twitter, Medium, Linkedin, Add } from 'grommet-icons'

// ==> Themes \\
import light from './Themes/light'
import { grommet, dark } from 'grommet/themes'
import { dxc } from 'grommet-theme-dxc'

// ==> Components <== \\
import Routes from './Routes'
import NavBar from './Components/NavBar'
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
						<Box height={{min: '100vh'}}>
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

								{/* {!showSidebar || size !== 'small' ? (
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
								)} */}

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
						<Footer background='brand' pad='small' direction='row-responsive'>
							<Box direction='column'>
								<Box direction='column'>
									<Box direction='row' justify='center'>
										<Text size='small' margin={{ top: 'xxsmall' }}>
											Made with
										</Text>
										<Box margin={{ left: 'xsmall' }}>
											<Button
												icon={<GrommetIcon size='medium' color='accent-2' />}
												plain
												href='https://v2.grommet.io/'
												target='_blank'
											/>
										</Box>
										<Box margin={{ left: 'xsmall', right: 'xxsmall' }} justify='center'>
											<Add size='small' />
										</Box>
										<Box margin={{ left: 'xxsmall', right: 'xsmall' }}>
											<Button
												icon={<Reactjs size='medium' color='#61DBFB' />}
												plain
												href='https://reactjs.org/'
												target='_blank'
											/>
										</Box>
										<Text size='small' margin={{ top: 'xxsmall' }}>
											and a whole lot of
										</Text>
										<Box margin={{ left: 'xsmall', right: 'xsmall' }}>
											<Favorite size='medium' color='focus' />
										</Box>
										<Text size='small' margin={{ top: 'xxsmall' }}>
											by Shane
										</Text>
									</Box>
									<Box direction='row' alignSelf='center' gap='medium' pad={{ top: 'medium' }}>
										<Button
											icon={
												<Avatar
													size='small'
													src='https://avatars2.githubusercontent.com/u/52255508?s=400&u=ca705fb2292c36027735a9b012b720a0ce869649&v=4'
												/>
											}
											plain
											href='https://shanelonergan.dev'
											target='_blank'
										/>
										<Button
											icon={<Github />}
											plain
											href='https://github.com/shanelonergan'
											target='_blank'
										/>
										<Button
											icon={<Twitter />}
											plain
											href='https://twitter.com/shane__lonergan'
											target='_blank'
										/>
										<Button
											icon={<Medium />}
											plain
											href='https://medium.com/@sptlonergan'
											target='_blank'
										/>
										<Button
											icon={<Linkedin />}
											plain
											href='https://www.linkedin.com/in/shane-lonergan/'
											target='_blank'
										/>
									</Box>
								</Box>
							</Box>
							<Box direction='column'>
								<Text size='small' margin={{ top: 'xsmall' }} alignSelf='center'>
									Indigo is open-source! Check it out on GitHub:
								</Text>
								<Box pad={{ top: 'medium' }} direction='row' alignSelf='center'>
									<Button
										icon={<Github />}
										plain
										alignSelf='center'
										pad='small'
										href='https://github.com/shanelonergan/indigo'
										target='_blank'
									/>
									<Text size='small' margin={{ top: 'xxsmall', left: 'small' }}>
										© 2020
									</Text>
								</Box>
							</Box>
						</Footer>
					</SizeContext.Provider>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	)
}

export default App
