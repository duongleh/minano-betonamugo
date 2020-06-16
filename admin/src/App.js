import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import crudProvider from '@fusionworks/ra-data-nest-crud';
import { ListCourse, CourseCreate, CourseEdit } from './Courses';
import authProvider from './Providers/authProvider';
import Login from './views/Login';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = crudProvider('http://localhost:4000/api/v1', httpClient);

const App = () => {
  return (
    <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
      {/* <Resource name='users' list={ListGuesser} /> */}
      <Resource name='courses' list={ListCourse} edit={CourseEdit} create={CourseCreate} />
    </Admin>
  );
};

export default App;
