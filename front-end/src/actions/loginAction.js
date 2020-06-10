import axios from 'axios';

export const LOGIN = 'LOGIN';
export const ISLOADING = 'ISLOADING';

export const login = (token) => async (dispatch) => {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  await axios
    .get('http://localhost:4000/api/v1/auth/verify')
    .then((response) => {
      // handle success
      dispatch({
        type: LOGIN,
        isLogin: true,
        name: response.data.name,
        role: response.data.role,
        token
      });
      dispatch({
        type: ISLOADING,
        isLoading: false
      });
      if (response.data.role === true) window.location.href = 'http://localhost:3030';
    })
    .catch((error) => {
      // handle error
      localStorage.removeItem('token');
      dispatch({
        type: ISLOADING,
        isLoading: false
      });
    });

  //  isLogin will save in store and can be called from any view
};

export const isloading = () => async (dispatch) => {
  dispatch({
    type: ISLOADING,
    isLoading: false
  });
};
