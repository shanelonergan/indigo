import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Cart, User, Login, Search, Favorite } from 'grommet-icons';
import {
    Box,
    Button,
    Heading,
    Image,
    DropButton,
    Form,
    FormField
} from 'grommet';

const SearchBar = () => {
    const history = useHistory();
    const [searchParams, setSearchParams] = useState({
        text: []
    });
    const handleSubmit = () => {
        history.push('/listings?');
    };
    const renderDropContent = () => {
        return (
            <Box pad='large' background='brand'>
                <Form>
                    <FormField name='text' />
                    <Button
                        type='submit'
                        label='Submit'
                        // primary
                        fill='horizontal'
                        onSubmit={handleSubmit}
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
        />
    );
};

export default SearchBar;
