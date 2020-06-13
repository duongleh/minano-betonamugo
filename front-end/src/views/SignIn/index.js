import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as UI from 'actions/UIAction';
import axios from 'axios';

import './index.css';

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    dispatch(UI.updateMenuKey(3));
  }, [dispatch]);

  const handleSubmit = async () => {
    await axios
      .post('http://localhost:4000/api/v1/auth/signin', {
        email,
        password
      })
      .then((res) => {
        localStorage.setItem('token', res.data.accessToken);
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error.response);
        if (typeof error.response.data.message[0] !== 'string')
          setMsg(error.response.data.message[0]);
        else setMsg(error.response.data.message);
      });
  };

  return (
    <div className='login_container'>
      <div className='box'>
        <div className='choice_container'>
          <div className='c1'>
            <div className='c11' />
            <div id='left'>
              <h3 className='s1class text-color'>
                <span className='big'>SIGN</span>
                <span className='su'>IN</span>
              </h3>
            </div>
            <Route
              render={({ history }) => (
                <div
                  id='right'
                  onClick={() => {
                    history.push('/signup');
                  }}
                >
                  <h3 className='s2class'>
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
            <h2 className='signup1'>Sign In</h2>

            <div className='form logon'>
              {msg ? <p className='colorError'>{msg}</p> : <></>}

              <input
                className='input'
                id='email'
                name='email'
                type='text'
                placeholder='Email*'
                onChange={(event) => setEmail(event.target.value)}
              />

              <input
                className='input '
                id='password'
                name='password'
                type='password'
                placeholder='Password*'
                onChange={(event) => setPassword(event.target.value)}
              />
              <button className='button' onClick={() => handleSubmit()}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
