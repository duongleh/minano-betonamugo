import React, { useState, useEffect } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import axios from 'axios';
import Login from 'views/Login';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const verifyToken = () => {
      var token;
      window.addEventListener('load', async () => {
        if ((token = localStorage.getItem('token'))) {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

          await axios.get('http://localhost:4000/api/v1/auth/verify').then((response) => {
            console.log(response.data);
            if (response.data.role) {
              setIsLogin(true);
            }
          });
        } else localStorage.removeItem('token');
      });
    };
    verifyToken();
  }, []);

  return (
    <div>
      {isLogin ? (
        <Admin dataProvider={dataProvider}>
          <Resource name='users' list={ListGuesser} />
        </Admin>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
