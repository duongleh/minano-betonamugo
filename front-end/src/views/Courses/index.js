import React, { useState } from 'react';
import { Typography, Row, Col, Card, Button } from 'antd';

import './index.css';
import Carou from 'components/Carousel';
import StudentFeedback from 'components/StudentFeedback';
import Review from 'components/Review';

const { Paragraph } = Typography;

function Course() {
  const [course] = useState({
    title: 'Bai hoc vo long',
    description:
      "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life--William Shakespeare",
    views: 25,
    thumbnail: 'https://i.pinimg.com/originals/08/ad/0c/08ad0cbece1080aa5b5cd3ccb157af3f.jpg'
  });

  const [rows] = useState(2);
  return (
    <div>
      <Carou url={course.thumbnail} />
      <Row justify='space-between'>
        <Col span={16}>
          <Row gutter={[16, 48]}>
            <Col span={24}>
              <h1 className='tl'>{course.title}</h1>
              <Paragraph
                className='tl'
                ellipsis={{
                  rows,
                  expandable: true,
                  onEllipsis: (ellipsis) => {
                    console.log('Ellipsis changed:', ellipsis);
                  }
                }}
              >
                {course.description}
              </Paragraph>
            </Col>

            <Col span={24}>
              <StudentFeedback />
            </Col>

            <Col span={24}>
              <Review />
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <Card
            title='Join now !'
            bordered={false}
            style={{ width: '100%', boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)' }}
          >
            <Button type='danger'>Ngay luôn chứ gì nữa</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Course;
