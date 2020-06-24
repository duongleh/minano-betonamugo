import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as courseAction from 'actions/courseAction';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import CourseCard from 'components/Card';
import axios from 'axios';
import CourseEnrollment from 'components/CourseEnrollment';

function ListCourse({ title, isCertificate, url }) {
  const dispatch = useDispatch();
  const CourseStatus = useSelector((state) => state.CourseStatus);
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      dispatch(courseAction.getAllCourese());
    };
    fetchCourse();
  }, [dispatch]);

  useEffect(() => {
    const fetchCourse = async () => {
      const req = await axios.get(url);
      if (req.status === 200) setCourses(req.data);
    };

    if (!!url) fetchCourse();
  }, [url]);

  return (
    <div>
      <h1 className='tl'>{title}</h1>
      {!!url && courses ? (
        <Row gutter={[16, 24]}>
          {courses.map((course, index) => (
            <Col className='gutter-row' key={index} span={6}>
              {!!isCertificate ? (
                <Link to={`/certificate/${course.courseId}`}>
                  <CourseEnrollment id={course.courseId} />
                </Link>
              ) : (
                <Link to={`/course/${course.courseId}`}>
                  <CourseEnrollment id={course.courseId} process={course.completionRatio} />
                </Link>
              )}
            </Col>
          ))}
        </Row>
      ) : (
        <Row gutter={[16, 24]}>
          {!!CourseStatus.courses ? (
            CourseStatus.courses.map((course, index) => (
              <Col className='gutter-row' key={index} span={6}>
                <Link to={`/course/${course.id}`}>
                  <CourseCard courseDetail={course} />
                </Link>
              </Col>
            ))
          ) : (
            <></>
          )}
        </Row>
      )}
    </div>
  );
}

export default ListCourse;
