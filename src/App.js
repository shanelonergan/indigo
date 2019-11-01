import React, { useState } from 'react'

// ==> Grommet <== \\
import {
  Box,
  Grommet,
  ResponsiveContext
} from 'grommet';

// ==> Themes \\
import light from './Themes/light'

// ==> Components <== \\
import Routes from './Routes'
import NavBar from './Components/NavBar'
import CollapsableSidebar from './Components/CollapsableSidebar'
import MobileSidebar from './Components/MobileSidebar';

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

    return (
      <Grommet theme={light} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <NavBar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />

              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>

                <Routes />

                {!showSidebar || size !== 'small' ? (
                  <CollapsableSidebar
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                  />
                ) : (

                  <MobileSidebar
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
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
