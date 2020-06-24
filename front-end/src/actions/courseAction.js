import axios from 'axios';
export const GET_ALL_COURSE = 'GET_ALL_COURSE';

export const getAllCourese = () => async (dispatch) => {
  const courses = await axios.get('http://localhost:4000/api/v1/courses');

  dispatch({
    type: GET_ALL_COURSE,
    courses: courses.data
  });
};
