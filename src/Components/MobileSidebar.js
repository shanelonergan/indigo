import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../Redux/actions'
import { FormClose } from 'grommet-icons'
import { Box, Button, Layer, Text } from 'grommet'

const MobileSidebar = ({ showUserInfo, setShowUserInfo, setOpenLogIn, openLogIn }) => {
	const loggedInUser = useSelector((state) => state.user)
	const username = loggedInUser.username
	console.log(username)
	const text = username ? `Welcome, ${username}` : 'Nobody is logged in'
	const dispatch = useDispatch()

	const onLogout = () => {
		dispatch(logoutUser())
		setShowUserInfo(false)
	}
	return (
		<Layer>
			<Box background='c2' tag='header' justify='end' align='center' direction='row'>
				<Button icon={<FormClose />} onClick={() => setShowUserInfo(!showUserInfo)} />
			</Box>
			<Box flex width='medium' background='c2' elevation='small' align='center' justify='center'>
				<Text margin='medium'>{text}</Text>
				{username ? (
					<Button label='log out' onClick={onLogout} />
				) : (
					<Button label='log in' onClick={() => setOpenLogIn(!openLogIn)} />
				)}
			</Box>
		</Layer>
	)
}

export default MobileSidebar
