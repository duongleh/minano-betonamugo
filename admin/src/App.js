import React from 'react';
import { Admin, Resource } from 'react-admin';
import courses from './Courses';
import users from './Users';
import videos from './Videos';
import enrollments from './Enrollments';
import authProvider from './Providers/authProvider';
import Login from './views/Login';
import dataProvider from './Providers/dataProvider';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name='users' {...users} />
      <Resource name='courses' {...courses} />
      <Resource name='videos' {...videos} />
      <Resource name='enrollments' {...enrollments} />
    </Admin>
  );
};

export default App;
