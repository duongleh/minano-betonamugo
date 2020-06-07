import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

import HeaderNav from './components/Header';
import FooterNav from './components/Footer';

import { Layout } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Header>
            <HeaderNav />
          </Header>
          <Content className='min_height'>
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
