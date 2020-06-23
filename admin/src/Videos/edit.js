import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceField, TextField } from 'react-admin';
import { filterObject } from '../Helpers';

const acceptAttributes = ['title', 'url'];

const VideoEdit = (props) => {
  return (
    <Edit {...props} transform={(data) => filterObject(data, acceptAttributes)}>
      <SimpleForm redirect='list'>
        <ReferenceField label='Course' source='courseId' reference='courses'>
          <TextField source='name' />
        </ReferenceField>
        <TextInput label='Title' source='title' />
        <TextInput label='Url' source='url' />
      </SimpleForm>
    </Edit>
  );
};

export default VideoEdit;
