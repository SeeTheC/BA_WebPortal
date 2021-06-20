// @flow
import { put, takeLatest, call } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import ApiCaller from '../ApiCaller';

const apiData = payload => {
  return ApiCaller('/api/v1/auth', 'post', payload).then(response => response);
};

export default function* login(): Saga {
  yield takeLatest('LOGIN', function* operateData(action) {
    yield put({ type: 'LOGIN_STARTED' });
    try {
      const DATA = yield call(apiData.bind(this, action.payload));
      yield put({ type: 'LOGIN_SUCCESS', payload: DATA });
    } catch (error) {
      yield put({ type: 'LOGIN_FAILED' });
    }
  });
}
