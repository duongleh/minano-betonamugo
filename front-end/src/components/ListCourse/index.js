import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import CourseCard from 'components/Card';
import axios from 'axios';

function ListCourse({ title, isCertificate }) {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await axios.get('http://localhost:4000/api/v1/courses');
      setCourses(course.data);
    };
    fetchCourse();
  }, []);

  return (
    <div>
      <h1 className='tl'>{title}</h1>
      <Row gutter={[16, 24]}>
        {!!courses ? (
          courses.map((course, index) => (
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
