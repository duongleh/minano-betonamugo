import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as loginAction from 'actions/loginAction';
import store from 'store';
import { Link } from 'react-router-dom';
import { Menu, Col, Row, Avatar, Dropdown, Select } from 'antd';
import { Redirect } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import './index.css';

const { Option } = Select;

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
  const CourseStatus = useSelector((state) => state.CourseStatus);
  const [checkRedirect, setCheckRedirect] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const options = CourseStatus.courses.map((d) => <Option key={d.title}>{d.title}</Option>);

  const onSearch = (value) => {
    let isHave = CourseStatus.courses.filter((course) => {
      return course.title === value;
    });
    if (isHave.length > 0) {
      setCheckRedirect(true);
      setSearchData(isHave[0]);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {checkRedirect ? <Redirect to={`/course/${searchData.id}`} /> : ''}
      <Row justify='space-between'>
        <Col span={2}>
          <Link to='/'>
            <h2 className='cw'>Home</h2>
          </Link>
        </Col>
        <Col span={5}>
          <Select
            showSearch
            placeholder='Input course name'
            style={{ width: '100%' }}
            defaultActiveFirstOption={false}
            showArrow={false}
            onSelect={(value) => onSearch(value)}
          >
            {options}
          </Select>
        </Col>
        <Col>
          {LoginStatus.isLogin ? (
            <Row>
              <Col className='mgr_10'>
                <Link to='/profile'>
                  <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    {LoginStatus.name[0]}
                  </Avatar>
                </Link>
              </Col>
              <Col className='usename mgr_10'>{LoginStatus.name}</Col>
              <Col>
                <Dropdown overlay={menu}>
                  <div className='ant-dropdown-link cl_w' onClick={(e) => e.preventDefault()}>
                    <DownOutlined />
                  </div>
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
