import React, { useState } from 'react';
import { Rate, Row, Col, Progress } from 'antd';

import './index.css';

function StudentFeedback() {
  const [stars] = useState([5, 4, 3, 2, 1]);
  return (
    <div>
      <h1 className='tl'>Student Feedback</h1>
      <Row>
        <Col>
          <p className='rate_f'>4.5</p>
          <Rate disabled allowHalf defaultValue={4.5} />
        </Col>
        <Col span={15}>
          {stars.map((star) => (
            <Row justify='space-around' key={star}>
              <Col span={12}>
                <div className='mt_5'>
                  <Progress percent={30} className='slide_w' />
                </div>
              </Col>
              <Col span={10}>
                <Rate disabled defaultValue={star} />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default StudentFeedback;
