import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createListing } from '../Redux/actions/listingActions.js';
import { Checkmark } from 'grommet-icons';

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
    let brandNames = [];
    let categoryNames = [];
    let conditionNames = [];
    let millNames = [];
    let washNames = [];

    const { brands, categories, conditions, mills, washes } = useSelector(
        state => state.filters
    );
    console.log(categories);

      if (brands && categories && conditions && mills && washes) {
        brandNames = brands.map(brand => brand.name);
        categoryNames = categories.map(category => category.name);
        conditionNames = conditions.map(condition => condition.name);
        millNames = mills.map(mill => mill.name);
        washNames = washes.map(wash => wash.name);
    }


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
                    onSubmit={({ value }) => console.log('Submit', value)}
                >
                    <h4>item details</h4>
                    <FormField
                        placeholder='item name'
                        name='name'
                        value={newListingForm.name}
                        required
                        // validate={{ regexp: /^[a-z]/i }}
                    />
                    <FormField
                        placeholder='brand'
                        name='brand'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={brandNames}
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
                        options={categoryNames}
                    />
                    <FormField
                        placeholder='condition'
                        name='condition'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={conditionNames}
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
                    <h4>denim details</h4>
                    <FormField
                        placeholder='mill'
                        name='mill'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={millNames}
                    />
                    <FormField
                        placeholder='wash'
                        name='wash'
                        component={Select}
                        onChange={event => console.log(event)}
                        options={washNames}
                    />
                    <FormField
                        placeholder='denim weight (oz)'
                        name='weight'
                        type='number'
                    />
                    <h4>description</h4>
                    <FormField
                        placeholder='item description'
                        name='descriptions'
                        component={TextArea}
                    />
                    <Box margin={{ top: 'medium' }}>
                        <Button
                            type='submit'
                            label='submit'
                            primary
                            color='brand'
                            alignSelf='center'
                            fill='true'
                            icon={<Checkmark />}
                        />
                    </Box>
                </Form>
            </Box>
        </Box>
    );
};

export default NewListingContainer;
