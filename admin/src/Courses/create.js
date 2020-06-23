import React from 'react';
import {
  ArrayInput,
  TabbedForm,
  FormTab,
  Create,
  SimpleFormIterator,
  TextInput,
  required,
} from 'react-admin';

const CourseCreate = (props) => (
  <Create {...props}>
    <TabbedForm redirect='list'>
      <FormTab label='Basic info'>
        <TextInput label='Name' source='name' />
        <TextInput label='Title' source='title' />
        <TextInput multiline label='Description' source='description' />
        <TextInput label='Thumbnail' source='thumbnail'></TextInput>
      </FormTab>
      <FormTab label='Content'>
        <ArrayInput source='videos'>
          <SimpleFormIterator>
            <TextInput source='title' label='Video title' validate={[required()]} />
            <TextInput source='url' label='Url' />
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>
    </TabbedForm>
  </Create>
);

export default CourseCreate;
