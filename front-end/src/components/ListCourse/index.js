import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as courseAction from 'actions/courseAction';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import CourseCard from 'components/Card';

function ListCourse({ title, isCertificate }) {
  const dispatch = useDispatch();
  const CourseStatus = useSelector((state) => state.CourseStatus);

  useEffect(() => {
    const fetchCourse = async () => {
      dispatch(courseAction.getAllCourese());
    };
    fetchCourse();
  }, [dispatch]);

  return (
    <div>
      <h1 className='tl'>{title}</h1>
      <Row gutter={[16, 24]}>
        {!!CourseStatus.courses ? (
          CourseStatus.courses.map((course, index) => (
            <Col className='gutter-row' key={index} span={6}>
              {!!isCertificate ? (
                <Link to={`/certificate/${course.id}`}>
                  <CourseCard courseDetail={course} />
                </Link>
              ) : (
                <Link to={`/course/${course.id}`}>
                  <CourseCard courseDetail={course} />
                </Link>
              )}
            </Col>
          ))
        ) : (
          <></>
        )}
      </Row>
    </div>
  );
}

export default ListCourse;
