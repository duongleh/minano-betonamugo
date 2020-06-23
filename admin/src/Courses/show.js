import React from 'react';
import { DateField, ImageField, TextField, Show, SimpleShowLayout } from 'react-admin';

const CourseShow = (props) => {
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

export default CourseShow;
