import React, { Component } from 'react';
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

const theme = {
  global: {
    "name": "indigo dark",
    "rounding": 4,
    "spacing": 24,
    "global": {
      "colors": {
        "brand": "#00004D",
        "neutral-1": "#000D36",
        "neutral-2": "#809FFF",
        "neutral-3": "#BFCFFF",
        "neutral-4": "#FFFFFF",
        "accent-1": "#CC0000",
        "background": "#020B31",
        "text": {
          "dark": "#fff"
        },
        "focus": "#809FFF"
      },
      "font": {
        "family": "Helvetica",
        "size": "18px",
        "height": "24px",
        "maxWidth": "432px"
      },
      "control": {
        "border": {
          "radius": "4px"
        }
      },
      "borderSize": {
        "xsmall": "1px",
        "small": "2px",
        "medium": "4px",
        "large": "12px",
        "xlarge": "24px"
      },
      "breakpoints": {
        "small": {
          "value": 768,
          "borderSize": {
            "xsmall": "1px",
            "small": "2px",
            "medium": "4px",
            "large": "6px",
            "xlarge": "12px"
          },
          "edgeSize": {
            "none": "0px",
            "hair": "1px",
            "xxsmall": "2px",
            "xsmall": "3px",
            "small": "6px",
            "medium": "12px",
            "large": "24px",
            "xlarge": "48px"
          },
          "size": {
            "xxsmall": "24px",
            "xsmall": "48px",
            "small": "96px",
            "medium": "192px",
            "large": "384px",
            "xlarge": "768px",
            "full": "100%"
          }
        },
        "medium": {
          "value": 1536
        },
        "large": {}
      },
      "edgeSize": {
        "none": "0px",
        "hair": "1px",
        "xxsmall": "3px",
        "xsmall": "6px",
        "small": "12px",
        "medium": "24px",
        "large": "48px",
        "xlarge": "96px",
        "responsiveBreakpoint": "small"
      },
      "input": {
        "padding": "12px",
        "weight": 600
      },
      "spacing": "24px",
      "size": {
        "xxsmall": "48px",
        "xsmall": "96px",
        "small": "192px",
        "medium": "384px",
        "large": "768px",
        "xlarge": "1152px",
        "xxlarge": "1536px",
        "full": "100%"
      }
    },
    "button": {
      "border": {
        "width": "2px",
        "radius": "18px"
      },
      "padding": {
        "vertical": "4px",
        "horizontal": "22px"
      }
    },
    "checkBox": {
      "check": {
        "radius": "4px"
      },
      "toggle": {
        "radius": "24px",
        "size": "48px"
      },
      "size": "24px"
    },
    "radioButton": {
      "size": "24px"
    },
    "calendar": {
      "small": {
        "fontSize": "14px",
        "lineHeight": 1.375,
        "daySize": "27.428571428571427px"
      },
      "medium": {
        "fontSize": "18px",
        "lineHeight": 1.45,
        "daySize": "54.857142857142854px"
      },
      "large": {
        "fontSize": "30px",
        "lineHeight": 1.11,
        "daySize": "109.71428571428571px"
      }
    },
    "clock": {
      "analog": {
        "hour": {
          "width": "8px",
          "size": "24px"
        },
        "minute": {
          "width": "4px",
          "size": "12px"
        },
        "second": {
          "width": "3px",
          "size": "9px"
        },
        "size": {
          "small": "72px",
          "medium": "96px",
          "large": "144px",
          "xlarge": "216px",
          "huge": "288px"
        }
      },
      "digital": {
        "text": {
          "xsmall": {
            "size": "10px",
            "height": 1.5
          },
          "small": {
            "size": "14px",
            "height": 1.43
          },
          "medium": {
            "size": "18px",
            "height": 1.375
          },
          "large": {
            "size": "22px",
            "height": 1.167
          },
          "xlarge": {
            "size": "26px",
            "height": 1.1875
          },
          "xxlarge": {
            "size": "34px",
            "height": 1.125
          }
        }
      }
    },
    "heading": {
      "level": {
        "1": {
          "small": {
            "size": "34px",
            "height": "40px",
            "maxWidth": "816px"
          },
          "medium": {
            "size": "50px",
            "height": "56px",
            "maxWidth": "1200px"
          },
          "large": {
            "size": "82px",
            "height": "88px",
            "maxWidth": "1968px"
          },
          "xlarge": {
            "size": "114px",
            "height": "120px",
            "maxWidth": "2736px"
          }
};

const AppBar = props => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false
  };
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level='3' margin='none'>
                  My App
                </Heading>

                <Button
                  icon={<Notification />}
                  onClick={() =>
                    this.setState(prevState => ({
                      showSidebar: !prevState.showSidebar
                    }))
                  }
                />
              </AppBar>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                  app body
                </Box>

                {!showSidebar || size !== 'small' ? (
                  <Collapsible direction='horizontal' open={showSidebar}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      sidebar
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
