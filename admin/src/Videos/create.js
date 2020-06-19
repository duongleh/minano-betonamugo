import * as React from 'react';
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  required,
} from 'react-admin';

const VideoCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label='Course' source='courseId' reference='courses' validate={[required()]}>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='title' label='Video title' validate={[required()]} />
      <TextInput source='url' />
    </SimpleForm>
  </Create>
);

export default VideoCreate;
