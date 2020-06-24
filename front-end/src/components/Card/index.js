import React from 'react';
import { Rate, Card, Avatar, Row, Col } from 'antd';

import './index.css';
const { Meta } = Card;

function CourseCard({ courseDetail, progress }) {
  return (
    <Card
      span={6}
      cover={<img className='card_image_size' alt='example' src={courseDetail.thumbnail} />}
    >
      <Meta
        avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
        title={courseDetail.title}
        description={courseDetail.description}
      />
      <Row>
        {!!progress ? <p style={{ margin: '0px' }}>{progress}%</p> : ''}
        <Col>
          <div className='space rate'>
            <Rate allowHalf defaultValue={0} />
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CourseCard;
