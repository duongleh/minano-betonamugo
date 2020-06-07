import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as UI from 'actions/UIAction';

import '../SignIn/index.css';

function SignUp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UI.updateMenuKey(3));
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log(data);
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
