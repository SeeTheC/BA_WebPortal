import { all } from 'redux-saga/effects';
import login from './login';

const rootSaga = function* rootSaga() {
  yield all([
    login(),
  ]);
};

export default rootSaga;
