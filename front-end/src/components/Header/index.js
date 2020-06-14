import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Col, Row } from 'antd';
import './index.css';

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
            <Col className='usename'>{LoginStatus.name}</Col>
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
