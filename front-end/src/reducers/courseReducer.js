import * as actions from 'actions/courseAction';

const initialState = {
  courses: []
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ALL_COURSE:
      return {
        ...state,
        courses: action.courses
      };
    default:
      return state;
  }
};
export default courseReducer;
