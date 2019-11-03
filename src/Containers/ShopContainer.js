import React, { useState } from 'react';
import { Box, Grid, Text, RangeSelector, Stack, Image, InfinateScroll } from 'grommet';

const ShopContainer = () => {
    const [range, setRange] = useState([30, 32]);
  const onChange = values => {
    setRange(values);
  };
  const direction = 'horizontal'
    return (
        <Grid
            fill
            rows={['auto', 'flex']}
            columns={['auto', 'flex']}
            areas={[
                { name: 'sidebar', start: [0, 1], end: [0, 1] },
                { name: 'main', start: [1, 1], end: [1, 1] }
            ]}
        >
            <Box gridArea='sidebar' background='c2' width='small'>
            <Stack >
          <Box
            direction="column"
            justify="between"

          >
            {[26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38].map(value => (
              <Box
                key={value}
                width="xxsmall"
                height="xxsmall"
                align="center"
                pad="small"
                border={false}
              >
                <Text style={{ fontFamily: "monospace" }}>{value}</Text>
              </Box>
            ))}
          </Box>
          <RangeSelector
            direction='vertical'
            min={26}
            max={40}
            size="string"
            round='medium'
            values={range}
            onChange={onChange}

          />
        </Stack>
            </Box>

            <Box gridArea='main' justify='center' align='center'>
                <Text>main</Text>
            </Box>
        </Grid>
    );
};

export default ShopContainer;
