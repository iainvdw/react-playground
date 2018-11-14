import InitialState from '../InitialState';
import { createReducer } from '../Utils';
import * as types from './types';

export default createReducer(InitialState.auth, {
  [types.AUTH_USER_ASYNC.PENDING](state) {
    return { ...state, loading: true };
  },
  [types.AUTH_USER_ASYNC.ERROR](state, action) {
    return { ...state, loading: false, error: action.error };
  },
  [types.AUTH_USER_ASYNC.SUCCESS](state, action) {
    return {
      ...state,
      user: action.user,
      loading: false,
      error: null,
    };
  },
  [types.AUTH_USER_ASYNC.LOGOUT](state) {
    return {
      ...state,
      user: null,
      loading: false,
      error: null,
    };
  },
});
