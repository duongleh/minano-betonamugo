import React from 'react';
import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
  ReferenceField,
  EditButton,
  DeleteButton,
} from 'react-admin';
import VideoThumbnail from './VideoThumbnail';

const ListVideo = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id'></TextField>
        <TextField label='Title' source='title'></TextField>
        <FunctionField label='Video Thumbnail' render={(record) => VideoThumbnail(record)} />
        <ReferenceField label='Course' source='courseId' reference='courses' link='show'>
          <TextField source='name' />
        </ReferenceField>
        <DateField label='Created at' source='createdAt'></DateField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default ListVideo;
