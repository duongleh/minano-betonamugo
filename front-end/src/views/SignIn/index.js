import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as UI from 'actions/UIAction';

import './index.css';

function SignIn() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UI.updateMenuKey(2));
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log(data);
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

            <form className='form logon' onSubmit={handleSubmit}>
              <input className='input ' id='email' name='email' type='text' placeholder='Email*' />

              <input
                className='input '
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
  );
}

export default SignIn;
