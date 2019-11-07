import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router'
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
    RangeSelector,
    Text
} from 'grommet';

const NewListingContainer = () => {
    console.log('new listing container')
    const dispatch = useDispatch();

    const { brands, categories, conditions, mills, washes } = useSelector(
        state => state.filters
    );

    const [toListings, setToListings] = useState(false)

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
        price: ''
    });

    let renderBrandOptions = () => {
        return []
    }
    let renderCategoryOptions = () => {
        return []
    }
    let renderMillOptions = () => {
        return []
    }
    let renderWashOptions = () => {
        return []
    }
    let renderConditionOptions = () => {
        return []
    }

    if (brands && categories && conditions && mills && washes) {
         renderBrandOptions = () => {
            return brands.map(brand => (
                <option key={brand.id} value={brand.id} name={brand.name}>
                    {brand.name}
                </option>
            ));
        };
         renderCategoryOptions = () => {
            return categories.map(category => (
                <option
                    key={category.id}
                    value={category.id}
                    name={category.name}
                >
                    {category.name}
                </option>
            ));
        };
         renderConditionOptions = () => {
            return conditions.map(condition => (
                <option
                    key={condition.id}
                    value={condition.id}
                    name={condition.name}
                >
                    {condition.name}
                </option>
            ));
        };
         renderMillOptions = () => {
            return mills.map(mill => (
                <option key={mill.id} value={mill.id} name={mill.name}>
                    {mill.name}
                </option>
            ));
        };
         renderWashOptions = () => {
            return washes.map(wash => (
                <option key={wash.id} value={wash.id} name={wash.name}>
                    {wash.name}
                </option>
            ));
        };
    }

    const handleChange = event => {
        // debugger
        setNewListingForm({
            ...newListingForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(newListingForm);
        setToListings(true)
        dispatch(createListing(newListingForm));
        // history.push('/');
    };

    return (
        <Box fill align='center' justify='center'>
            { toListings ? <Redirect to='/listings'/> : null }
            <Box width='medium'>
                <h1>Add a new listing</h1>
                <Form onSubmit={handleSubmit}>
                    <h4>item details</h4>
                    <FormField
                        placeholder='item name'
                        name='name'
                        value={newListingForm.name}
                        onChange={handleChange}
                        required
                        // validate={{ regexp: /^[a-z]/i }}
                    />
                    {/* <FormField
                        placeholder='brand'
                        name='brand'
                        component={Select}
                        onChange={handleChange}
                        labelKey='name'
                        value={newListingForm.brand}
                        options={brands ? brands : []}
                    /> */}
                    <div className='select is-small'>
                        <select name='brand_id' onChange={handleChange}>
                            <option value="" disabled defaultValue hidden>brand</option>
                            {brands ? renderBrandOptions() : null}
                        </select>
                    </div>
                    <div className='select is-small'>
                        <select name='category_id' onChange={handleChange}>
                        <option value="" disabled defaultValue hidden>category</option>
                            {categories ? renderCategoryOptions() : null}
                        </select>
                    </div>
                    <div className='select is-small'>
                        <select name='condition_id' onChange={handleChange}>
                            <option value="" disabled defaultValue hidden>condition</option>
                            {conditions ? renderConditionOptions() : null}
                        </select>
                    </div>

                    {/* <FormField
                        name='gender'
                        component={RadioButtonGroup}
                        pad
                        options={['male', 'female', 'unisex']}
                    /> */}
                    {/* <FormField
                        placeholder='category'
                        name='category'
                        component={Select}
                        labelKey='name'
                        value={newListingForm.category}
                        onChange={handleChange}
                        options={categories ? categories : []}
                    />
                    <FormField
                        placeholder='condition'
                        name='condition'
                        component={Select}
                        labelKey='name'
                        value={newListingForm.condition}
                        onChange={handleChange}
                        options={conditions ? conditions : []}
                    /> */}
                    <FormField
                        placeholder='waist'
                        name='waist'
                        type='number'
                        // component={Select}
                        value={newListingForm.waist}
                        onChange={handleChange}
                        // options={[
                        //     26,
                        //     27,
                        //     28,
                        //     29,
                        //     30,
                        //     31,
                        //     32,
                        //     33,
                        //     34,
                        //     35,
                        //     36,
                        //     37,
                        //     38
                        // ]}
                    />
                    <FormField
                        placeholder='length'
                        name='length'
                        type='number'
                        // component={Select}
                        value={newListingForm.length}
                        onChange={handleChange}
                        // options={[28, 29, 30, 31, 32, 33, 34, 35, 36]}
                    />
                    <h4>denim details</h4>
                    {/* <FormField
                        placeholder='mill'
                        name='mill'
                        component={Select}
                        labelKey='name'
                        value={newListingForm.mill}
                        onChange={handleChange}
                        options={mills ? mills : []}
                    /> */}
                    <label>
                        <select name='wash_id' onChange={handleChange}>
                            <option value="" disabled defaultValue hidden>wash</option>
                            {washes ? renderWashOptions() : null}
                        </select>
                    </label>
                    {/* <FormField
                        placeholder='wash'
                        name='wash'
                        component={Select}
                        labelKey='name'
                        value={newListingForm.wash}
                        onChange={handleChange}
                        options={washes ? washes : []}
                    /> */}
                    <label>
                        <select name='mill_id' onChange={handleChange}>
                            <option value="" disabled defaultValue hidden>mill</option>
                            {mills ? renderMillOptions() : null}
                        </select>
                    </label>
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
                     <FormField
                        label='price'
                        placeholder='price'
                        name='weight'
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
        </Box>
    );
};

export default NewListingContainer;
