import React, { useState, useEffect } from 'react';
import CourseCard from 'components/Card';
import axios from 'axios';

function CourseEnrollment({ id, process }) {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const req = await axios.get(`http://localhost:4000/api/v1/courses/${id}`);
      if (req.status === 200) {
        setCourse(req.data);
      }
    };
    fetchCourse();
  }, [id]);
  return <>{course ? <CourseCard courseDetail={course} progress={process} /> : <></>}</>;
}

export default CourseEnrollment;
