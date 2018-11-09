import {
  AUTH_USER, LOGOUT_USER, REQUEST_AUTH, AUTH_ERROR,
} from '../actions/auth-actions';

const initialState = {
  loading: false,
  error: null,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_AUTH:
      return { ...state, loading: true };
    case AUTH_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    case AUTH_USER:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    default:
      return { ...state };
  }
}
