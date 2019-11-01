import React, { useState } from 'react';

import { Add } from 'grommet-icons';

import {
  Box,
  Button,
  FormField,
  Heading,
  Layer,
  TextInput
} from 'grommet';
import LoginForm from '../Components/LoginForm';

const HomeContainer = () => {
  const [open, setOpen] = React.useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  return (
    <Box fill align='center' justify='center'>
      <Button icon={<Add />} label='Log In' onClick={onOpen} />
      {open && (
        // <Layer
        //   position='right'
        //   full='vertical'
        //   modal
        //   onClickOutside={onClose}
        //   onEsc={onClose}
        // >
        //   <Box
        //     as='form'
        //     fill='vertical'
        //     overflow='auto'
        //     width='medium'
        //     pad='medium'
        //     onSubmit={onClose}
        //   >
        //     <Box flex={false} direction='row' justify='between'>
        //       <Heading level={2} margin='none'>
        //         Log In
        //       </Heading>
        //       <Button icon={<Close />} onClick={onClose} />
        //     </Box>
        //     <Box flex='grow' overflow='auto' pad={{ vertical: 'medium' }}>
        //       <FormField label='Username'>
        //         <TextInput
        //           id='text-input'
        //           placeholder='placeholder'
        //           value={state.value}
        //           onChange={onChange}
        //         />
        //       </FormField>
        //       <FormField label='Password'>
        //         <TextInput
        //           id='text-input'
        //           type='password'
        //           placeholder='placeholder'
        //           value={state.value}
        //           onChange={onChange}
        //         />
        //       </FormField>
        //     </Box>
        //     <Box flex={false} as='footer' align='start'>
        //       <Button type='submit' label='Submit' onClick={onClose} primary />
        //     </Box>
        //   </Box>
        // </Layer>
        <LoginForm
        // onChange={onChange}
        onClose={onClose}
        onOpen={onOpen}
        />
      )}
    </Box>
  );
};

export default HomeContainer;
