import React from "react";

import {
  Box,
  Button,
  Form,
  FormField,
  RadioButtonGroup,
} from "grommet";

const FormContainer = () => (
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form
          onReset={event => console.log(event)}
          onSubmit={({ value }) => console.log("Submit", value)}
        >
            <FormField
                label="Username"
                name="name"
                required
            />
            <FormField
                label="Email"
                name="email"
                type="email"
                required
            />
            <FormField
                label="Password"
                name="password"
                type="password"
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
                <Button type="submit" label="Log In" primary />
            </Box>
        </Form>
      </Box>
    </Box>
);

export default FormContainer
