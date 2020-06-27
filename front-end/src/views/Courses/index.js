import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Button } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import './index.css';
import Carou from 'components/Carousel';
import StudentFeedback from 'components/StudentFeedback';
import Review from 'components/Review';
import CourseContent from 'components/CourseContent';

const { Paragraph } = Typography;

function Course() {
  const LoginStatus = useSelector((state) => state.LoginStatus);
  const { id } = useParams();
  const [rows] = useState(2);
  const [isEnroll, setIsEnroll] = useState(false);
  const [enrollment, setEnrollment] = useState({});
  const [completedVideo, setCompletedVideo] = useState(null);

  const [course, setCourse] = useState({
    title: 'Bai hoc vo long',
    description:
      "To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life--William Shakespeare",
    views: 25,
    thumbnail: 'https://i.pinimg.com/originals/08/ad/0c/08ad0cbece1080aa5b5cd3ccb157af3f.jpg'
  });

  useEffect(() => {
    const fetchCourse = async () => {
      const req = await axios.get(
        `http://localhost:4000/api/v1/courses/${id}?join=enrollments&join=enrollments.user&join=videos`
      );
      if (req.status === 200) {
        setCourse(req.data);
        let isHave = req.data.enrollments.filter((enrollment) => {
          return enrollment.user.id === LoginStatus.id;
        });
        if (isHave.length > 0) {
          setIsEnroll(true);
          setEnrollment(isHave[0]);
        }
      }
    };
    fetchCourse();
  }, [LoginStatus.id, id]);

  useEffect(() => {
    const fetchProgress = async () => {
      if (!!enrollment.id) {
        const req = await axios.get(
          `http://localhost:4000/api/v1/enrollments/${enrollment.id}/progress`
        );
        setCompletedVideo(req.data);
      }
    };
    fetchProgress();
  }, [enrollment.id]);

  const fetchCourse = async () => {
    const req = await axios.get(
      `http://localhost:4000/api/v1/courses/${id}?join=enrollments&join=enrollments.user&join=videos`
    );
    if (req.status === 200) {
      setCourse(req.data);
      let isHave = req.data.enrollments.filter((enrollment) => {
        return enrollment.user.id === LoginStatus.id;
      });
      if (isHave.length > 0) {
        setIsEnroll(true);
        setEnrollment(isHave[0]);
      }
    }
  };

  const enroll = async () => {
    const req = await axios.post('http://localhost:4000/api/v1/enrollments', {
      courseId: parseInt(id)
    });
    if (req.status === 201) {
      setIsEnroll(true);
      fetchCourse();
    }
  };

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
                  expandable: true
                }}
              >
                {course.description}
              </Paragraph>
            </Col>

            <Col span={24}>
              <CourseContent videos={course.videos} />
            </Col>

            <Col span={24}>
              <StudentFeedback rate={course.rate} enrollments={course.enrollments} />
            </Col>

            <Col span={24}>
              <Review
                review={course.enrollments}
                fetchCourse={fetchCourse}
                enrollment={enrollment}
              />
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <Card
            title='Join now !'
            bordered={false}
            style={{ width: '100%', boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)' }}
          >
            {isEnroll ? (
              <Link
                to={{
                  pathname: `/video/${id}`,
                  state: {
                    enrollment: completedVideo
                  }
                }}
              >
                <Button type='danger'>Watch video</Button>
              </Link>
            ) : (
              <Button onClick={() => enroll()} type='danger'>
                Enroll
              </Button>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Course;
