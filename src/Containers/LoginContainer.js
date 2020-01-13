import React from 'react';
import { LoginForm } from '../Components/index';

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
