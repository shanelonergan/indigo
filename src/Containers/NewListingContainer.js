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
    let renderBrandOptions = () => {
      return []
    }
    let categoryNames = [];
    let conditionNames = [];
    let millNames = [];
    let washNames = [];

    const { brands, categories, conditions, mills, washes } = useSelector(
        state => state.filters
    );

      if (brands && categories && conditions && mills && washes) {
        renderBrandOptions = () => {
          return brands.map(brand => (
            { name: brand.name, id: brand.id }
        ))};
        categoryNames = categories.map(category => (
          <option key={ categories.id } value={ categories.id }>{ categories.name }</option>
        ));
        conditionNames = conditions.map(condition => (
          <option key={ condition.id } value={ condition.id }>{ condition.name }</option>
        ));
        millNames = mills.map(mill => (
          <option key={ mill.id } value={ mill.id }>{ mill.name }</option>
        ));
        washNames = washes.map(wash => (
          <option key={ wash.id } value={ wash.id }>{ wash.name }</option>
        ));
    }


    const dispatch = useDispatch();

    const [newListingForm, setNewListingForm] = useState({
        name: '',
        category: 0,
        brand: 0,
        waist: 30,
        length: 32,
        weight: 12,
        wash: 0,
        mill: 0,
        condition: 0
    });

    const handleChange = event => {
        debugger
        setNewListingForm({
            ...newListingForm,
            [event.target.name]: event.target.value
        })};

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createListing(newListingForm));
        // history.push('/');
    };

    return (
        <Box fill align='center' justify='center'>
            <Box width='medium'>
                <h1>Add a new listing</h1>
                <Form
                    onSubmit={handleSubmit}
                >
                    <h4>item details</h4>
                    <FormField
                        placeholder='item name'
                        name='name'
                        value={newListingForm.name}
                        onChange={handleChange}
                        required
                        // validate={{ regexp: /^[a-z]/i }}
                    />
                    <FormField
                        placeholder='brand'
                        name='brand'
                        component={Select}
                        onChange={handleChange}
                        labelKey='id'
                        valueKey='name'
                        // value={brands ? brands : []}
                        options={brands ? renderBrandOptions() : []}
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
                        value={newListingForm.category}
                        onChange={handleChange}
                        options={categoryNames}
                    />
                    <FormField
                        placeholder='condition'
                        name='condition'
                        component={Select}
                        value={newListingForm.condition}
                        onChange={handleChange}
                        options={conditionNames}
                    />
                    <FormField
                        placeholder='waist'
                        name='waist'
                        component={Select}
                        value={newListingForm.waist}
                        onChange={handleChange}
                        options={[26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]}
                    />
                    <FormField
                        placeholder='length'
                        name='length'
                        component={Select}
                        value={newListingForm.length}
                        onChange={handleChange}
                        options={[28, 29, 30, 31, 32, 33, 34, 35, 36]}
                    />
                    <h4>denim details</h4>
                    <FormField
                        placeholder='mill'
                        name='mill'
                        component={Select}
                        value={newListingForm.mill}
                        onChange={handleChange}
                        options={millNames}
                    />
                    <FormField
                        placeholder='wash'
                        name='wash'
                        component={Select}
                        value={newListingForm.wash}
                        onChange={handleChange}
                        options={washNames}
                    />
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
                        name='descriptions'
                        component={TextArea}
                        value={newListingForm.description}
                        onChange={handleChange}
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
