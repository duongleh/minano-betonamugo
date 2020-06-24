import * as login from 'actions/loginAction';

const initialState = {
  isLogin: false,
  id: '',
  name: '',
  token: '',
  email: '',
  isLoading: true,
  users: null,
  currentUserGroup: null
  // NOTE
  // some thing you want to set global
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.LOGIN:
      return {
        ...state,
        isLogin: action.isLogin,
        name: action.name,
        email: action.email,
        token: action.token,
        id: action.id
      };
    case login.ISLOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};

export default loginReducer;
