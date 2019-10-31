import React from "react";

import {
  Box,
  Button,
  CheckBox,
  Grommet,
  Form,
  FormField,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea
} from "grommet";

const FormContainer = () => (
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form
          onReset={event => console.log(event)}
          onSubmit={({ value }) => console.log("Submit", value)}
        >
          <FormField
            label="Name"
            name="name"
            required
            validate={{ regexp: /^[a-z]/i }}
          />
          <FormField label="Email" name="email" type="email" required />
          <FormField
            label="Employee ID"
            name="employeeId"
            required
            validate={{ regexp: /^[0-9]{4,6}$/, message: "4-6 digits" }}
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
