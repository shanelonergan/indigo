import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../Redux/actions';
import { Box, Button, FormField, Heading, Layer, TextInput, Text, Anchor } from 'grommet';
import { Close } from 'grommet-icons';

const LoginForm = ({ setOpenLogin, onCloseLogIn, history }) => {
    const user = useSelector(state => state.user)
    console.log(user)
    if (user.username) {
        onCloseLogIn(false)
    } else if (user.error) {
        alert('user not found')
    }

    const dispatch = useDispatch();

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });

    const onSubmit = event => {
        console.log('submit')
        event.preventDefault()
        dispatch(loginUser(loginForm))
          setLoginForm({
            username: '',
            password: ''
        })
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
            onClickOutside={onCloseLogIn}
            onEsc={onCloseLogIn}
        >
            <Box
                as='form'
                fill='vertical'
                overflow='auto'
                width='medium'
                pad='medium'
                onSubmit={ onSubmit }
                background='c2'
            >
                <Box flex={false} direction='row' justify='between'>
                    <Heading level={2} margin='none'>
                        Log In
                    </Heading>
                    <Button icon={<Close />} onClick={onCloseLogIn} />
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
                    <Box direction='row' align='center' justify='center'>
                        <Text margin='small'>New? </Text>
                        <Anchor href="/signup" primary label="Sign up" margin='small' color='control'/>
                    </Box>
                </Box>
                <Box flex={false} as='footer' align='start'>
                    <Button
                        type='submit'
                        label='Submit'
                        fill={true}
                        onClick={onSubmit}

                    />
                </Box>
            </Box>
        </Layer>
    );
};

export default withRouter(LoginForm);
