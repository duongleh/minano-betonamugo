import React, { useState, useEffect } from 'react';
import { Rate, Row, Col, Progress } from 'antd';
import { StarFilled } from '@ant-design/icons';

import './index.css';

function StudentFeedback({ rate, enrollments }) {
  const [stars] = useState([5, 4, 3, 2, 1, 0]);
  const [rates, setRates] = useState({});

  useEffect(() => {
    if (enrollments) {
      const rates = enrollments.reduce((total, current) => {
        if (current.rate !== null) {
          total[current.rate] = total[current.rate] + 1 || 1;
          total['total'] = total['total'] + 1 || 1;
        }
        return total;
      }, {});
      setRates(rates);
    }
  }, [enrollments]);

  return (
    <div>
      <h1 className='tl'>Student Feedback</h1>
      <Row>
        <Col span={12}>
          <p className='rate_f'>{rate}</p>
          <Rate disabled value={rate} />
        </Col>
        <Col span={12}>
          {stars.map((star) => (
            <Row justify='center' key={star}>
              <Col span={4}>
                {star} <StarFilled />
              </Col>
              <Col span={12}>
                <div>
                  <Progress
                    percent={Number(((rates[star] / rates.total) * 100).toFixed(2))}
                    format={(e) => `${e}%`}
                  />
                </div>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default StudentFeedback;
