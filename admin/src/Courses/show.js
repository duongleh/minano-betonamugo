import React from 'react';
import { DateField, ImageField, TextField, Show, SimpleShowLayout } from 'react-admin';

import './index.css';

const CourseShow = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ImageField label='Thumbnail' source='thumbnail' />
        <TextField label='Title' source='title' />
        <TextField label='Description' source='description' />
        <DateField source='createdAt' />
      </SimpleShowLayout>
    </Show>
  );
};

export default CourseShow;
