import React from 'react';
import { Cart, User, Login, Search, Favorite } from 'grommet-icons';
import { Box, Button, Heading, Image, DropButton, Form, FormField } from 'grommet';

const renderDropContent = () => {
    return (
        <Box pad='large' background='light-2'>
            <Form>
                <FormField name='text' label='Search' />
                <Button type='submit' label='Submit' primary />
            </Form>
        </Box>
    )
}

const SearchBar = () => {
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
