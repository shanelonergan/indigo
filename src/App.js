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

function App() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
      if (localStorage.token) {
        dispatch(persistUser())
      }
    })

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
                        />

                        <Box
                            direction='row'
                            flex
                            overflow={{ horizontal: 'hidden' }}
                        >
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
