import React from 'react';
import {
  Create,
  Datagrid,
  DateField,
  Edit,
  EditButton,
  List,
  ImageField,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin';

export const ListCourse = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id'></TextField>
      <ImageField label='Thumbnail' source='thumbnail' />
      <TextField label='Name' source='name' />
      <TextField label='Title' source='title' />
      <TextField label='Description' source='description' />
      <DateField source='createdAt' />
      <EditButton />
    </Datagrid>
  </List>
);

export const CourseCreate = (props) => (
  <Create {...props} title='コース作成'>
    <SimpleForm>
      <TextInput label='Name' source='name' />
      <TextInput label='Title' source='title' />
      <TextInput multiline label='Description' source='description' />
      <TextInput label='Thumbnail' source='thumbnail'></TextInput>
    </SimpleForm>
  </Create>
);

export const CourseEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label='Name' source='name' />
        <TextInput label='Title' source='title' />
        <TextInput label='Description' source='description' />
        <TextInput label='Thumbnail' source='thumbnail' />
      </SimpleForm>
    </Edit>
  );
};
