import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Col, Row } from 'antd';
import './index.css';

function HeaderNav() {
  const UI = useSelector((state) => state.UI);
  const LoginStatus = useSelector((state) => state.LoginStatus);

  return (
    <div style={{ width: '100%' }}>
      {UI.MenuKey ? (
        <Row justify='space-between'>
          <Col span={12}>
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[UI.MenuKey]}>
              <Menu.Item key='1'>
                <Link to='/'>Home</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col>
            {LoginStatus.isLogin ? (
              <Col className='usename'>{LoginStatus.name}</Col>
            ) : (
              <Row>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[UI.MenuKey]}>
                  <Menu.Item key='2'>
                    <Link to='/signup'>SignUp</Link>
                  </Menu.Item>
                  <Menu.Item key='3'>
                    <Link to='/signin'>SignIn</Link>
                  </Menu.Item>
                </Menu>
              </Row>
            )}
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HeaderNav;
