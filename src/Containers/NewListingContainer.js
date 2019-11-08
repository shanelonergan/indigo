import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router'
import { createListing } from '../Redux/actions/listingActions';
import { Checkmark } from 'grommet-icons';
import { FilterSelector } from '../Components/index'
import { ResizeSpinLoader } from 'react-css-loaders';

import {
    Box,
    Button,
    Form,
    FormField,
    TextArea,
    Text
} from 'grommet';

const NewListingContainer = () => {
    const dispatch = useDispatch();

    const loggedInUser = useSelector(state => state.user)

    const { brands, categories, conditions, mills, washes } = useSelector(
        state => state.filters
    );

    const [toListings, setToListings] = useState(false)

    const [loaded, setLoaded] = useState(false)

    const [newListingForm, setNewListingForm] = useState({
        name: '',
        category_id: '',
        brand_id: '',
        waist: 30,
        length: 32,
        weight: 12,
        wash_id: '',
        mill_id: '',
        condition_id: '',
        price: 0
    });

    if (brands && categories && conditions && mills && washes) {
        if (!loaded){setLoaded(true)}
    }

    const handleChange = event => {
        setNewListingForm({
            ...newListingForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        const listingInfo = {listing: newListingForm, user_id: loggedInUser.id}
        event.preventDefault();
        setToListings(true)
        dispatch(createListing(listingInfo));
    };

    return (

        <Box fill align='center' justify='center'>
            { toListings ? <Redirect to='/listings'/> : null }
            { loaded === true ?

            <Box width='medium'>
                <Text size='large' weight='bold' color='brand' margin={{'bottom':'medium'}}>Add a new listing</Text>

                <Form onSubmit={handleSubmit}>
                    <h4>item details</h4>
                    <FormField
                        placeholder='item name'
                        name='name'
                        value={newListingForm.name}
                        onChange={handleChange}
                        required
                    />

                    <FilterSelector handleChange={handleChange} filterObj={brands} name='brand'/>

                    <FilterSelector handleChange={handleChange} filterObj={categories} name='category'/>

                    <FilterSelector handleChange={handleChange} filterObj={conditions} name='condition'/>

                    {/* <FormField
                        name='gender'
                        component={RadioButtonGroup}
                        pad
                        options={['male', 'female', 'unisex']}
                    /> */}

                    <FormField
                        placeholder='waist'
                        name='waist'
                        type='number'
                        value={newListingForm.waist}
                        onChange={handleChange}

                    />
                    <FormField
                        placeholder='length'
                        name='length'
                        type='number'
                        value={newListingForm.length}
                        onChange={handleChange}

                    />
                    <h4>denim details</h4>


                    <FilterSelector handleChange={handleChange} filterObj={washes} name='wash'/>

                    <FilterSelector handleChange={handleChange} filterObj={mills}  name='mill'/>

                    <FormField
                        placeholder='denim weight (oz)'
                        name='weight'
                        type='number'
                        value={newListingForm.weight}
                        onChange={handleChange}
                    />
                    <h4>description</h4>
                    <FormField
                        placeholder='item description'
                        name='description'
                        component={TextArea}
                        value={newListingForm.description}
                        onChange={handleChange}
                    />
                     <FormField
                        label='price'
                        placeholder='price'
                        name='price'
                        type='number'
                        value={newListingForm.price}
                        onChange={handleChange}
                    />
                    <Box margin={{ top: 'medium' }}>
                        <Button
                            type='submit'
                            label='submit'
                            primary
                            color='brand'
                            alignSelf='center'
                            fill={true}
                            icon={<Checkmark />}
                        />
                    </Box>
                </Form>

            </Box>
            :
            <ResizeSpinLoader color='#00004D' /> }
        </Box>
    );
};

export default NewListingContainer;
