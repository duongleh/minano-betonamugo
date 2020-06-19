import React from 'react';
import { Admin, Resource } from 'react-admin';
import { ListCourse, CourseCreate, CourseEdit, CourseShow } from './Courses';
import users from './Users';
import videos from './Videos';
import authProvider from './Providers/authProvider';
import Login from './views/Login';
import dataProvider from './Providers/dataProvider';

const App = () => {
  return (
    <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name='users' {...users} />
      <Resource name='courses' list={ListCourse} edit={CourseEdit} create={CourseCreate} show={CourseShow}/>
      <Resource name='videos' {...videos} />
    </Admin>
  );
};

export default App;
