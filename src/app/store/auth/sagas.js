import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import actions from '../Auth';
import * as types from './types';

// Simulated async login
const login = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve({ user: { name: 'Iain' } });
    } else {
      reject(new Error('Oh noes'));
    }
  }, 1000);
});

function* loginUser() {
  try {
    const user = yield call(login);
    yield put(actions.loginSuccess(user));
  } catch (error) {
    yield put(actions.error({ error: error.message }));
  }
}

function logoutUser() {
  console.log('log out!');
}

export default function* () {
  yield all([
    takeLatest(types.AUTH_USER_ASYNC.PENDING, loginUser),
    takeLatest(types.AUTH_USER_ASYNC.LOGOUT, logoutUser),
  ]);
}
