import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createListing } from '../Redux/actions/listingActions.js';
import { Checkmark } from 'grommet-icons'

import {
    Box,
    Button,
    Form,
    FormField,
    RadioButtonGroup,
    CheckBox,
    Select,
    TextArea,
    RangeSelector
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
              <h1>Add a new listing</h1>
                <Form
                    onReset={event => console.log(event)}
                    onSubmit={({ value }) => console.log('Submit', value)}
                >
                    <h2>details</h2>
                    <FormField
                        placeholder='item name'
                        name='name'
                        required
                        validate={{ regexp: /^[a-z]/i }}
                    />
                    <FormField
                        placeholder='brand'
                        name='brand'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={['small', 'medium', 'large', 'xlarge']}
                    />
                    {/* <FormField
                        name='gender'
                        component={RadioButtonGroup}
                        pad
                        options={['male', 'female', 'unisex']}
                    /> */}
                     <FormField
                        placeholder='category'
                        name='category'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={['small', 'medium', 'large', 'xlarge']}
                    />
                    <FormField
                        placeholder='condition'
                        name='condition'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={['small', 'medium', 'large', 'xlarge']}
                    />
                    <FormField
                        placeholder='waist'
                        name='waist'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={['small', 'medium', 'large', 'xlarge']}
                    />
                    <FormField
                        placeholder='length'
                        name='length'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={['small', 'medium', 'large', 'xlarge']}
                    />
                    <FormField
                        placeholder='mill'
                        name='mill'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={['small', 'medium', 'large', 'xlarge']}
                    />
                    <FormField
                        placeholder='wash'
                        name='wash'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={['small', 'medium', 'large', 'xlarge']}
                    />
                    <FormField
                        placeholder='denim weight (oz)'
                        name='weight'
                        type='number'
                    />
                    <FormField
                        placeholder='item description'
                        name='descriptions'
                        component={TextArea}
                    />
                    <Box

                        margin={{ top: 'medium' }}
                    >
                        <Button type='submit' label='submit' primary color='brand' alignSelf='center' fill='true' icon={<Checkmark/>}/>
                    </Box>
                </Form>
            </Box>
        </Box>
    );
};

export default NewListingContainer;
