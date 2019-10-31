import React, { useState } from 'react'
// ==> Grommet <== \\
import { Notification, FormClose } from 'grommet-icons';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext
} from 'grommet';

// ==> Themes \\
import light from './Themes/light'

// ==> Components <== \\
// import {MainContainer} from './Containers';
import Routes from './Routes'
import NavBar from './Components/NavBar'
import CollapsableSidebar from './Components/CollapsableSidebar'
import MobileSidebar from './Components/MobileSidebar';


// const AppBar = props => (
//   <Box
//     tag='header'
//     direction='row'
//     align='center'
//     justify='between'
//     background='brand'
//     pad={{ left: 'medium', right: 'small', vertical: 'small' }}
//     elevation='medium'
//     style={{ zIndex: '1' }}
//     {...props}
//   />
// );

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

    return (
      <Grommet theme={light} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <NavBar>
                <Heading level='3' margin='none'>
                  Indigo
                </Heading>

                <Button
                  icon={<Notification />}
                  onClick={() =>
                    setShowSidebar(!showSidebar)
                  }
                />
              </NavBar>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>

                <Routes />

                {!showSidebar || size !== 'small' ? (
                  // <Collapsible direction='horizontal' open={showSidebar}>
                  //   <Box
                  //     flex
                  //     width='medium'
                  //     background='light-2'
                  //     elevation='small'
                  //     align='center'
                  //     justify='center'
                  //   >
                  //     sidebar
                  //   </Box>
                  // </Collapsible>
                  <CollapsableSidebar
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                  />
                ) : (
                  // <Layer>
                  //   <Box
                  //     background='light-2'
                  //     tag='header'
                  //     justify='end'
                  //     align='center'
                  //     direction='row'
                  //   >
                  //     <Button
                  //       icon={<FormClose />}
                  //       onClick={() => setShowSidebar(!showSidebar)}
                  //     />
                  //   </Box>
                  //   <Box
                  //     fill
                  //     background='light-2'
                  //     align='center'
                  //     justify='center'
                  //   >
                  //     sidebar
                  //   </Box>
                  // </Layer>
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
