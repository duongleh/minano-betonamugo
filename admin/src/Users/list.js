import React from 'react';
import { BooleanField, Datagrid, DateField, List, TextField, FunctionField } from 'react-admin';
import BlockButton from './BlockButton';
import UnblockButton from './UnblockButton';

const actionButton = (record) => {
  if (record.isBlock) {
    return <UnblockButton />;
  } else {
    return <BlockButton />;
  }
};

const ListUser = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='id'></TextField>
        <TextField label='Name' source='name'></TextField>
        <TextField label='Email' source='email'></TextField>
        <DateField label='Created at' source='createdAt'></DateField>
        <BooleanField label='Blocked' source='isBlock' />
        <FunctionField label='' render={(record) => actionButton(record)} />
      </Datagrid>
    </List>
  );
};

export default ListUser;
