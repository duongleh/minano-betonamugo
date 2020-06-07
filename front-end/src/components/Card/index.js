import React from 'react';
import { Rate, Card, Avatar } from 'antd';

import './index.css';
const { Meta } = Card;

function CourseCard() {
  return (
    <Card
      span={6}
      cover={
        <img
          alt='example'
          src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
        />
      }
    >
      <Meta
        avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
        title='Card title'
        description='This is the description'
      />

      <div className='space rate'>
        <Rate allowHalf defaultValue={2.5} />
      </div>
    </Card>
  );
}

export default CourseCard;
