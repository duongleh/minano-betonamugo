import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  ShowButton,
  TextField,
  ImageField,
  DateField,
} from 'react-admin';

const ListCourse = (props) => (
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

export default ListCourse;
