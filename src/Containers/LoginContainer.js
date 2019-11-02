import React from 'react';
import LoginForm from '../Components/LoginForm';
import { Box } from 'grommet';

const LoginContainer = ({openLogIn, onCloseLogIn, onOpenLogIn}) => {
    return (
        <Box fill align='center' justify='center'>
            {openLogIn && (
                <LoginForm
                    onCloseLogIn={onCloseLogIn}
                    onOpenLogIn={onOpenLogIn}
                />
            )}
        </Box>
    );
};

export default LoginContainer;
