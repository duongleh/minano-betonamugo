import React from 'react';
import Carou from 'components/Carousel';
import { Avatar, Row, Col } from 'antd';
import ListCourse from 'components/ListCourse';

import './index.css';

function Profile() {
  return (
    <div>
      <Carou url='https://image.freepik.com/free-vector/minimalist-japanese-cover-collection_23-2148415367.jpg' />
      <Row className='profile_cover'>
        <Col span={6} className='profile_avatar'>
          <Avatar
            style={{ backgroundColor: 'white' }}
            size={160}
            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
          />
        </Col>
      </Row>

      <ListCourse title='Participating Courses' />

      <ListCourse title='Completed Course' />
    </div>
  );
}

export default Profile;
