import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../Redux/actions';
import { Box, Button, FormField, Heading, Layer, TextInput } from 'grommet';
import { Close } from 'grommet-icons';

const LoginForm = ({ onClose, history }) => {
    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });

    const onSubmit = event => {
        event.preventDefault()
        dispatch(loginUser)
        history.push('/')
    }

    const onChange = event => {
        setLoginForm({...loginForm, [event.target.name]: event.target.value })
    };

    const { username, password } = loginForm

    return (
        <Layer
            position='right'
            full='vertical'
            modal
            onClickOutside={onClose}
            onEsc={onClose}
        >
            <Box
                as='form'
                fill='vertical'
                overflow='auto'
                width='medium'
                pad='medium'
                onSubmit={ onSubmit }
            >
                <Box flex={false} direction='row' justify='between'>
                    <Heading level={2} margin='none'>
                        Log In
                    </Heading>
                    <Button icon={<Close />} onClick={onClose} />
                </Box>
                <Box flex='grow' overflow='auto' pad={{ vertical: 'medium' }}>
                    <FormField label='Username'>
                        <TextInput
                            id='username-input'
                            name='username'
                            placeholder='Username'
                            value={username}
                            onChange={onChange}
                        />
                    </FormField>
                    <FormField label='Password'>
                        <TextInput
                            id='password-input'
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={onChange}
                        />
                    </FormField>
                </Box>
                <Box flex={false} as='footer' align='start'>
                    <Button
                        type='submit'
                        label='Submit'
                        onClick={onClose}
                        primary
                    />
                </Box>
            </Box>
        </Layer>
    );
};

export default LoginForm;
