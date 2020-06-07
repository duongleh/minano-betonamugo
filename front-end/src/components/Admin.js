import * as React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './user';
import MyLayout from './MyLayout';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function AdminView() {
  return (
    <Admin title="Admin" layout={MyLayout} dataProvider={dataProvider}>
      <Resource name="posts" list={ListGuesser} />
      <Resource name="users" options={{ label: 'ユーザー' }}　list={UserList} />
    </Admin>
  );
}

export default AdminView;
