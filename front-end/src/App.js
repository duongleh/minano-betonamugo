import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as loginAction from 'actions/loginAction';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import store from './store';

import HeaderNav from './components/Header';
import FooterNav from './components/Footer';

import { Layout } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAddress = () => {
      var token;
      window.addEventListener('load', () => {
        if ((token = localStorage.getItem('token'))) store.dispatch(loginAction.login(token));
        else store.dispatch(loginAction.isloading());
      });
    };
    getAddress();
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Header>
            <HeaderNav />
          </Header>
          <Content className='min_height container'>
            <Router />
          </Content>
          <Footer>
            <FooterNav />
          </Footer>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
