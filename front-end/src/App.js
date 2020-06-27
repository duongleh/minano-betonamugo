import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as loginAction from 'actions/loginAction';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import store from './store';

import HeaderNav from './components/Header';
import FooterNav from './components/Footer';

import { Layout } from 'antd';
import './App.css';
import LoadingPage from 'views/LoadingPage';

const { Header, Content, Footer } = Layout;

function App() {
  const dispatch = useDispatch();
  const LoginStatus = useSelector((state) => state.LoginStatus);

  useEffect(() => {
    const verifyToken = () => {
      var token;
      window.addEventListener('load', () => {
        if ((token = localStorage.getItem('token'))) store.dispatch(loginAction.login(token));
        else store.dispatch(loginAction.isloading());
      });
    };
    verifyToken();
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
        {LoginStatus.isLoading ? (
          <LoadingPage />
        ) : (
          <Layout className='min_height'>
            <Header>
              <HeaderNav />
            </Header>
            <Content className='container bg_w'>
              <Router />
            </Content>
            <Footer>
              <FooterNav />
            </Footer>
          </Layout>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
