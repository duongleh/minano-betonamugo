import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as UI from 'actions/UIAction';
import axios from 'axios';

import '../SignIn/index.css';

function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    dispatch(UI.updateMenuKey(3));
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    setName(data.get('name'));
    setEmail(data.get('email'));
    setPassword(data.get('password'));

    await axios
      .post('http://localhost:4000/api/v1/auth/signup', {
        email,
        password,
        name
      })
      .then((res) => {
        window.location.href = '/signin';
      })
      .catch((error) => {
        setMsg(error.response.data.message[0]);
      });
  };

  return (
    <div className='login_container '>
      <div className='box'>
        <div className='choice_container'>
          <div className='c1'>
            <div className='c11' />

            <Route
              render={({ history }) => (
                <div
                  id='left'
                  onClick={() => {
                    history.push('/signin');
                  }}
                >
                  <h3 className='s1class'>
                    <span className='big'>SIGN</span>
                    <span className='su'>IN</span>
                  </h3>
                </div>
              )}
            />
            <Route
              render={({ history }) => (
                <div
                  id='right'
                  onClick={() => {
                    history.push('/register');
                  }}
                >
                  <h3 className='s2class text-color'>
                    <span className='big'>SIGN</span>
                    <span className='su'>UP</span>
                  </h3>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      <div className='box'>
        <div className='choice_container'>
          <div className='c2'>
            <div className='form_box'>
              <h2 className='signup1'>Sign Up</h2>
              <form className='form logon' onSubmit={handleSubmit}>
                {msg ? <p className='colorError'>{msg}</p> : <></>}
                <input
                  className='input'
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Full name*'
                />

                <input className='input' id='email' name='email' type='text' placeholder='email*' />

                <input
                  className='input'
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Password*'
                />
                <button className='button'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
