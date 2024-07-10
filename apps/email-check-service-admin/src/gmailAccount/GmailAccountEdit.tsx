import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const GmailAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" />
        <TextInput label="password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
