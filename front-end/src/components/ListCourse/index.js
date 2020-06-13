import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import CourseCard from 'components/Card';

function ListCourse() {
  const [courses] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div>
      <h1 className='tl'>Top Course</h1>
      <Row gutter={[16, 24]}>
        {courses.map((course) => (
          <Col className='gutter-row' key={course} span={6}>
            <Link to={`/course/${course}`}>
              <CourseCard />
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ListCourse;
