export const REQUEST_AUTH = 'REQUEST_AUTH';
export const AUTH_USER = 'AUTH_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const authUser = user => (dispatch) => {
  dispatch({
    type: REQUEST_AUTH,
  });

  setTimeout(() => {
    if (Math.random() > 0.5) {
      dispatch({
        type: AUTH_USER,
        payload: user,
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: {
          error: 'Oh noes, try again',
        },
      });
    }
  }, 1000);
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
