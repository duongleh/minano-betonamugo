import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Col } from 'antd';
import './header.css';

function HeaderNav() {
  const UI = useSelector((state) => state.UI);

  return (
    <div style={{ width: '100%' }}>
      <Col span={12}>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={[UI.MenuKey]}>
          <Menu.Item key='1'>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/signup'>SignUp</Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link to='/signin'>SignIn</Link>
          </Menu.Item>
        </Menu>
      </Col>
    </div>
  );
}

export default HeaderNav;
