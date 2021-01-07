import React from 'react';
import { Datagrid, DateField, List, TextField, FunctionField, ReferenceField } from 'react-admin';
import { Rate } from 'antd';

const rating = (record) => {
  return <Rate allowHalf defaultValue={record.rate} disabled />;
};

const ListEnrollment = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <ReferenceField label='User' source='userId' reference='users' link='show'>
          <TextField source='name' />
        </ReferenceField>
        <ReferenceField label='Course' source='courseId' reference='courses' link='show'>
          <TextField source='name' />
        </ReferenceField>
        <TextField label='Comment' source='comment' />
        <FunctionField label='Rating' render={(record) => rating(record)} />
        <DateField label='Created at' source='createdAt'></DateField>
      </Datagrid>
    </List>
  );
};

export default ListEnrollment;
