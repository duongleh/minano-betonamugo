import React from 'react';
import Carou from 'components/Carousel';
import { useSelector } from 'react-redux';
import { Avatar, Row, Col } from 'antd';
import ListCourse from 'components/ListCourse';

import './index.css';

function Profile() {
  const LoginStatus = useSelector((state) => state.LoginStatus);

  return (
    <div>
      <Carou url='https://image.freepik.com/free-vector/minimalist-japanese-cover-collection_23-2148415367.jpg' />
      <Row className='profile_cover'>
        <Col span={6} className='profile_avatar'>
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} size={160}>
            <p style={{ fontSize: '60px' }}>{LoginStatus.name[0]}</p>
          </Avatar>
        </Col>
        <Col>
          <h2>{LoginStatus.name}</h2>
          <h4>({LoginStatus.email})</h4>
        </Col>
      </Row>

      <ListCourse title='Participating Courses' />

      <ListCourse title='Completed Course' isCertificate={true} />
    </div>
  );
}

export default Profile;
