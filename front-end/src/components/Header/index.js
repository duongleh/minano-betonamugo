import React from 'react';
import { useSelector } from 'react-redux';
import * as loginAction from 'actions/loginAction';
import store from 'store';
import { Link } from 'react-router-dom';
import { Menu, Col, Row, Avatar, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './index.css';

const menu = (
  <Menu className='dd_w'>
    <Menu.Item>
      <Link to='/profile'>Profile</Link>
    </Menu.Item>
    <Menu.Item>
      <div onClick={() => store.dispatch(loginAction.logout())}>Logout</div>
    </Menu.Item>
  </Menu>
);

function HeaderNav() {
  const LoginStatus = useSelector((state) => state.LoginStatus);

  return (
    <div style={{ width: '100%' }}>
      <Row justify='space-between'>
        <Col span={2}>
          <Link to='/'>
            <h2 className='cw'>Home</h2>
          </Link>
        </Col>
        <Col>
          {LoginStatus.isLogin ? (
            <Row>
              <Col className='mgr_10'>
                <Link to='profile'>
                  <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                </Link>
              </Col>
              <Col className='usename mgr_10'>{LoginStatus.name}</Col>
              <Col>
                <Dropdown overlay={menu}>
                  <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
                    <DownOutlined />
                  </a>
                </Dropdown>
              </Col>
              ,
            </Row>
          ) : (
            <Row>
              <Menu theme='dark' mode='horizontal'>
                <Menu.Item>
                  <Link to='/signup'>SignUp</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/signin'>SignIn</Link>
                </Menu.Item>
              </Menu>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default HeaderNav;
