import React from 'react';
import { BooleanField, Datagrid, DateField, List, TextField } from 'react-admin';
import BlockButton from './BlockButton';

const ListUser = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='id'></TextField>
        <TextField label='Name' source='name'></TextField>
        <TextField label='Email' source='email'></TextField>
        <DateField label='Created at' source='createdAt'></DateField>
        <BooleanField label='Blocked' source='isBlock' />
        <BlockButton />
      </Datagrid>
    </List>
  );
};

export default ListUser;
