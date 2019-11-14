import React, { useState }  from "react";
import { useDispatch } from 'react-redux';
import { createUser } from '../Redux/actions.js';

import {
  Box,
  Button,
  Form,
  FormField,
  RadioButtonGroup,
  Text
} from "grommet";

const FormContainer = ({history}) => {

    const dispatch = useDispatch();

    const [signupForm, setSignupForm] = useState({
      username: '',
      password: ''
    });

    const handleChange = event =>
      setSignupForm({ ...signupForm, [event.target.name]: event.target.value });

    const handleSubmit = event => {
      event.preventDefault();
      console.log(signupForm)
      dispatch(createUser(signupForm));
      history.push('/');
    };

    const { username, password } = signupForm;

    return (
    <Box fill align="center" justify="center">
      <Box height='90vh' width="medium">
      <Text size='6vh' margin={{top:'medium', bottom:'medium', left: 'small'}} color='brand' weight='bold'>Sign Up</Text>
        <Form
        //   onReset={event => console.log(event)}
          onSubmit={handleSubmit}

        >
            <FormField
                label="Username"
                name="username"
                required
                value={username}
                onChange={handleChange}
                placeholder="Username"
            />
            <FormField
                label="Email"
                name="email"
                type="email"
                placeholder='Email'
                // required
            />
            <FormField
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                required
            />
            <FormField
                label="I am interested in:"
                name="ampm"
                component={RadioButtonGroup}
                pad
                options={["clothing made for men", "clothing made for women", "both"]}
            />
            <Box direction="row" justify="between" margin={{ top: "medium" }}>
                <Button type="submit" label="Sign Up" fill color='brand'/>
            </Box>
        </Form>
      </Box>
    </Box>)
};

export default FormContainer
