import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createListing } from '../Redux/actions/listingActions.js';

import {
    Box,
    Button,
    Form,
    FormField,
    RadioButtonGroup,
    CheckBox,
    Select,
    TextArea,
    RangeInput
} from 'grommet';

const NewListingContainer = () => {
    const dispatch = useDispatch();

    const [newListingForm, setNewListingForm] = useState({
        name: '',
        category: '',
        brand: '',
        waist: 0,
        length: 0,
        weight: 0,
        wash: '',
        mill: '',
        condition: ''
    });

    const handleChange = event =>
        setNewListingForm({
            ...newListingForm,
            [event.target.name]: event.target.value
        });

    const handleSubmit = event => {
        event.preventDefault();
        console.log(newListingForm);
        dispatch(createListing(newListingForm));
        // history.push('/');
    };
    return (
        <Box fill align='center' justify='center'>
            <Box width='medium'>
                <Form
                    onReset={event => console.log(event)}
                    onSubmit={({ value }) => console.log('Submit', value)}
                >
                    <FormField
                        label='Name'
                        name='name'
                        required
                        validate={{ regexp: /^[a-z]/i }}
                    />
                    <FormField
                        label='Email'
                        name='email'
                        type='email'
                        required
                    />
                    <FormField
                        label='Employee ID'
                        name='employeeId'
                        required
                        validate={{
                            regexp: /^[0-9]{4,6}$/,
                            message: '4-6 digits'
                        }}
                    />
                    <FormField
                        name='subscribe'
                        component={CheckBox}
                        pad
                        label='Subscribe?'
                    />
                    <FormField
                        name='ampm'
                        component={RadioButtonGroup}
                        pad
                        options={['morning', 'evening']}
                    />
                    <FormField
                        label='Size'
                        name='size'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={['small', 'medium', 'large', 'xlarge']}
                    />
                    <FormField
                        label='Comments'
                        name='comments'
                        component={TextArea}
                    />
                    <FormField
                        label='Age'
                        name='age'
                        component={RangeInput}
                        pad
                        min={15}
                        max={75}
                    />
                    <Box
                        direction='row'
                        justify='between'
                        margin={{ top: 'medium' }}
                    >
                        <Button label='Cancel' />
                        <Button type='reset' label='Reset' />
                        <Button type='submit' label='Update' primary />
                    </Box>
                </Form>
            </Box>
        </Box>
    );
};

export default NewListingContainer;
