import React from 'react';
import { Rate, Card, Avatar } from 'antd';

import './index.css';
const { Meta } = Card;

function CourseCard({ courseDetail }) {
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

      <div className='space rate'>
        <Rate allowHalf defaultValue={0} />
      </div>
    </Card>
  );
}

export default CourseCard;
