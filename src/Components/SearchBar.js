import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Search } from 'grommet-icons';
import {
    Box,
    Button,
    DropButton,
    Form,
    FormField
} from 'grommet';

const SearchBar = ({searchDrop, setSearchDrop}) => {
    const history = useHistory();
    const [searchParams, setSearchParams] = useState({
        text: ''
    });
    const handleChange = event => {
        setSearchParams({
            ...searchParams,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = () => {
        const textArr = searchParams.text.split(' ')
        const textSlug = textArr.join('+')
        console.log(textSlug)
        history.push(`/listings?text=${textSlug}`);
        setSearchDrop(false)
    };
    const renderDropContent = () => {
        return (
            <Box pad='large' background='brand' onSubmit={handleSubmit}>
                <Form>
                    <FormField name='text' onChange={handleChange} focus/>
                    <Button
                        type='submit'
                        label='Submit'
                        // primary
                        fill='horizontal'
                    />
                </Form>
            </Box>
        );
    };
    return (
        <DropButton
            icon={<Search />}
            label='search'
            gap='5vw'
            onClick={() => {}}
            margin={{ left: 'small' }}
            dropAlign={{ top: 'bottom' }}
            dropContent={renderDropContent()}
            open={searchDrop}
            onClose={() => setSearchDrop(false)}
            onOpen={() => setSearchDrop(true)}
        />
    );
};

export default SearchBar;
