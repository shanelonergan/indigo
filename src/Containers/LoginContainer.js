import React from 'react';
import LoginForm from '../Components/LoginForm';
import { Box } from 'grommet';

const LoginContainer = ({openLogIn, onCloseLogIn, onOpenLogIn}) => {
    return (
        <>
            {openLogIn && (
                <LoginForm
                    onCloseLogIn={onCloseLogIn}
                    onOpenLogIn={onOpenLogIn}
                />
            )}
        </>
    );
};

export default LoginContainer;
