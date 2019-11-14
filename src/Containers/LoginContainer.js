import React from 'react';
import { LoginForm } from '../Components/index';
import { Box } from 'grommet';

const LoginContainer = ({openLogIn, setOpenLogin, onCloseLogIn, onOpenLogIn}) => {

    return (
        <>
            {openLogIn && (
                <LoginForm
                    onCloseLogIn={onCloseLogIn}
                    onOpenLogIn={onOpenLogIn}
                    setOpenLogin={setOpenLogin}
                />
            )}
        </>
    );
};

export default LoginContainer;
