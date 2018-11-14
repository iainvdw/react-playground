import { createAction } from './Utils';
import * as types from './auth/types';

export default {
  error: error => createAction(types.AUTH_USER_ASYNC.ERROR, error),
  login: () => createAction(types.AUTH_USER_ASYNC.PENDING),
  loginSuccess: user => createAction(types.AUTH_USER_ASYNC.SUCCESS, user),
  logout: () => createAction(types.AUTH_USER_ASYNC.LOGOUT),
};
