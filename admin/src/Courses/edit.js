import React from 'react';
import { SimpleForm, TextInput, Edit } from 'react-admin';
import { filterObject } from '../Helpers';

const acceptAttributes = ['name', 'title', 'description', 'thumbnail'];

const CourseEdit = (props) => {
  return (
    <Edit {...props} transform={(data) => filterObject(data, acceptAttributes)}>
      <SimpleForm redirect='list'>
        <TextInput label='Name' source='name' />
        <TextInput label='Title' source='title' />
        <TextInput label='Description' source='description' />
        <TextInput label='Thumbnail' source='thumbnail' />
      </SimpleForm>
    </Edit>
  );
};

export default CourseEdit;
