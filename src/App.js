import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ==> Grommet <== \\
import { Box, Grommet, ResponsiveContext } from 'grommet';

// ==> Themes \\
import light from './Themes/light';

// ==> Components <== \\
import Routes from './Routes';
import NavBar from './Components/NavBar';
import CollapsableSidebar from './Components/CollapsableSidebar';
import UserSidebar from './Components/UserSidebar';
import MobileSidebar from './Components/MobileSidebar';
import { persistUser } from './Redux/actions';
import LoginContainer from './Containers/LoginContainer';

function App() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const dispatch = useDispatch();

    const [openLogIn, setOpenLogIn] = React.useState(false);

    const onOpenLogIn = () => setOpenLogIn(true);

    const onCloseLogIn = () => setOpenLogIn(undefined);

    useEffect(() => {
        if (localStorage.token) {
            dispatch(persistUser());
        }
    });

    return (
        <Grommet theme={light} full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill>
                        <NavBar
                            showSidebar={showSidebar}
                            setShowSidebar={setShowSidebar}
                            showUserInfo={showUserInfo}
                            setShowUserInfo={setShowUserInfo}
                            openLogin={openLogIn}
                            setOpenLogIn={setOpenLogIn}
                            onOpenLogIn={onOpenLogIn}
                            onCloseLogIn={onCloseLogIn}
                        />

                        <Box
                            direction='row'
                            flex
                            overflow={{ horizontal: 'hidden' }}
                        >
                            <LoginContainer
                                openLogIn={openLogIn}
                                onCloseLogIn={onCloseLogIn}
                                onOpenLogIn={onOpenLogIn}
                            />
                            <Routes />

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
                                />
                            ) : (
                                <MobileSidebar
                                    showUserInfo={showUserInfo}
                                    setShowUserInfo={setShowUserInfo}
                                />
                            )}
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
}

export default App;
