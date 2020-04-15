import React, { useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { SizeContext } from './SizeContext'

// ==> Grommet <== \\
import { Box, Grommet, ResponsiveContext } from 'grommet'

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
					</SizeContext.Provider>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	)
}

export default App
