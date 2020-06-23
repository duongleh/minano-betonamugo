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
  Show,
  ShowButton,
  SimpleShowLayout,
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
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);

export const CourseCreate = (props) => (
  <Create {...props} title='コース作成'>
    <SimpleForm redirect='list'>
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
      <SimpleForm redirect='list'>
        <TextInput label='Name' source='name' />
        <TextInput label='Title' source='title' />
        <TextInput label='Description' source='description' />
        <TextInput label='Thumbnail' source='thumbnail' />
      </SimpleForm>
    </Edit>
  );
};

export const CourseShow = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ImageField source='thumbnail'></ImageField>
        <TextField label='Title' source='title' />
        <TextField label='Description' source='description' />
        <DateField source='createdAt' />
      </SimpleShowLayout>
    </Show>
  );
};
